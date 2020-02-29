import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";
import {bbsApi} from '../../api';

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