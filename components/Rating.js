import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { TINT_COLOR, GREY_COLOR } from "../constants/Color";

const Container = styled.View`
    flex-direction: row;
`;


const Likes = styled.Text`
    color: ${props => (props.inSlide ? "white" : GREY_COLOR)};
    font-size: ${props => (props.inSlide ? "18px" : "12px")};
    font-weight: 600;
`;

const Rating = ({likes, comments, inSlide = false}) => (
    <Container>
        <Likes inSlide={inSlide}>⭐ {likes}  </Likes>
        <Likes inSlide={inSlide}>⭐️ {comments}</Likes>


    </Container>
)

;

Rating.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    inSlide: PropTypes.bool
};

export default Rating;