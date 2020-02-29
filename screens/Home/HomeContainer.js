import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: false
    };

    render () {
        const { loading } = this.state;
        return <HomePresenter loading={loading}/>;
    }
}


export default HomeContainer;