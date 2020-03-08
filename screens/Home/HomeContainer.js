import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";
import {mainApi} from '../../api';

// 홈프레젠터를 데려온 것 만으로, 컨테이너는 프레젠터의 상위가 된다. 그렇다면 컨테이너의 변화도 프레젠터에 반영되고, 프레젠터의 변화도 컨테이너에 반영된다.

class HomeContainer extends Component {
    state = {
        loading: true,
        totaldata: null,
        error: null,
        psat: null,
        ncs: null
    };

    async componentDidMount(){
        try {
            ({data: {bbsInfo: totaldata}} = await mainApi.totalbbs());
            ({ data: { cateInfo: psat}} = await mainApi.psat());
            ({ data: { cateInfo: ncs}} = await mainApi.ncs());

            this.setState({totaldata, psat, ncs});
        

        } catch {
            this.setState({error: "Can't get Data"});
        } finally {
            this.setState({ loading: false });
        }
    };


    render () {
        const { loading, totaldata, psat, ncs } = this.state;
        console.log("ncs: ", ncs);
        return (
            <HomePresenter 
                loading={loading}
                totaldata={totaldata}
            />
        );
    }
}


export default HomeContainer;