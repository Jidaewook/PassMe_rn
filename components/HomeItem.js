import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Poster from './Poster';
import {GREY_COLOR} from "../constants/Color";

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const HContainer = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
`;

const Column = styled.View`
    margin-left: 20px;
    width: 60%;
`;

const Title = styled.Text`
    color: white;
    font-size: 15px;
    margin-vertical: 5px;
`;

const HomeItem = ({
    id,
    title,
    poster,
    likes,
    horizontal = false
}) => (
    horizontal ? (
        <HContainer>
            <Poster path={poster}/>
            <Column>
                <Title big={true}>
                    {title}
                </Title>
                
            </Column>
        </HContainer>
    ) : (
        <Container>
            <Poster path={poster} />
            <Title>
                {title}
            </Title>
        </Container>
    )
);

HomeItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    likes: PropTypes.array
};

export default HomeItem;