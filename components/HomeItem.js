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
    font-size: ${props => (!props.big ? "15px" : "17px")};
    margin-vertical: 5px;
`;

const Tag = styled.Text`

`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 14px;
  margin-vertical: 7px;
`;

const HomeItem = ({
    id,
    title,
    poster,
    likes,
    tag,
    desc,
    horizontal=false
}) => (
    horizontal ? (
        <HContainer>
            <Poster path={poster}/>
            <Column>
                <Title big={true}>{title}</Title>
                <Tag>{tag}</Tag>
                {desc ? (
                    <Overview>
                        {desc.length > 150 ? `${desc.substring(0, 160)}...` : desc}
                    </Overview>
                 ) : null }
                
            </Column>
        </HContainer>
    ) : (
        <Container>
            <Poster path={poster} />
            <Title>
                {title.length > 15 ? `${title.substring(0, 12)}...` : title}
            </Title>
            <Tag>{tag}</Tag>
        </Container>
    )
);

HomeItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    likes: PropTypes.array,
    tag: PropTypes.array,
    desc: PropTypes.string
};

export default HomeItem;