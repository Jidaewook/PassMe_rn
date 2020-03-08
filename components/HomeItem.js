import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import bbsimg from './BbsImage';
import {GREY_COLOR} from "../constants/Color";

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
    bbsimg,
    likes,
    horizontal = false
}) => (
    horizontal ? (
        <HContainer>
            <bbsimg path={bbsimg}/>
        </HContainer>
    ) : (
        <HContainer>
            <Title>
                {title}
            </Title>
        </HContainer>
    )
);

HomeItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    bbsimg: PropTypes.string.isRequired,
    likes: PropTypes.array
};

export default HomeItem;