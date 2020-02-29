import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";
import {bbsApi} from '../../api';

// 홈프레젠터를 데려온 것 만으로, 컨테이너는 프레젠터의 상위가 된다. 그렇다면 컨테이너의 변화도 프레젠터에 반영되고, 프레젠터의 변화도 컨테이너에 반영된다.

class HomeContainer extends Component {
    state = {
        loading: true,
        totaldata: null,
        error: null
    };

    async componentDidMount(){
        try {
            ({data: {bbsInfo: totaldata}} = await bbsApi.Totalbbs());

            this.setState({totaldata: totaldata});

        } catch {
            this.setState({error: "Can't get Data"});
        } finally {
            this.setState({ loading: false });
        }
    };


    render () {
        const { loading, totaldata } = this.state;
        console.log(totaldata);
        return (
            <HomePresenter 
                loading={loading}
                totaldata={totaldata}
            />
        );
    }
}


export default HomeContainer;