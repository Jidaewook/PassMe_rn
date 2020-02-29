import React from 'react';
import {Text, ScrollView} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import HomeSlider from "../../components/HomeSlider";


const HomePresenter = ({loading, totaldata}) => 
    loading ? ( 
        <Loader /> 
    ) : (
        <ScrollView>
            <HomeSlider sliderData={totaldata} />
        </ScrollView>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    totaldata: PropTypes.array
};

export default HomePresenter;