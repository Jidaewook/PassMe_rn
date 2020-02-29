import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import HomeSlide from "./HomeSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
    
    height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text`

`;


const HomeSlider = ({sliderData}) => (
    sliderData ? (
        <Swiper
            showsPagination={false}
            autoplay={true}
            style={{height:SWIPER_HEIGHT}}
            autoplayTimeout={3}
        >
            {sliderData
                .filter(slider => slider.bbsimg !== null)
                .map(slider => (
                    <View key={slider._id}>
                        <HomeSlide
                            bbsimg={slider.bbsimg}
                            title={slider.title}
                            desc={slider.desc}
                            
                        />
                    </View>
                ))
            }
        </Swiper> 
    ) : null
    
);

HomeSlider.propTypes = {
    sliderData: PropTypes.array
};

export default HomeSlider;
