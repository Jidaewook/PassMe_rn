import React from 'react';
import {View} from 'react-native';
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import {ACTIVE_COLOR, BG_COLOR} from "../constants/Color";

const Container = styled.View`
    flex: 1;
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height/3};
    opacity: 1;
    position: absolute;

`;

const Title = styled.Text`
    color: white;
    font-size: 30px;
    text-align: center;
    margin-top: 100px;
    font-weight: 600;
`;

const Desc = styled.Text`
    color: white;
    font-size: 15px;
    text-align: left;
    margin-top: 50px;
    font-weight: 500;
`;

const HomeSlide = ({
    bbsimg,
    title,
    desc
}) => (
    <Container>
        <BgImage source={{uri: makePhotoUrl(bbsimg)}} />
        <View> 
            <Title>
                {title}
            </Title>
        </View>
        <View>
            <Desc>
                {desc.slice(0, 100)}
            </Desc>
        </View>
        
    </Container>
);

HomeSlide.propTypes = {
    bbsimg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default HomeSlide;