import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from '../utils/makePhotoUrl';

const Image = styled.Image`
    width: 110px;
    height: 160px;
    border-radius: 2.5px;

`;


const BbsImage = ({path}) => (
    <Image source={{ uri: makePhotoUrl(path)}} />  
);


BbsImage.propTypes = {
    path: PropTypes.string
}

export default BbsImage;