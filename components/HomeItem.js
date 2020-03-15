import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Poster from './Poster';
import {GREY_COLOR} from "../constants/Color";

const Container = styled.View`
    margin-right: 20px;
    ${'' /* //flrx-direction: 자식요소 정렬방향 */}
    flex-direction: row;

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
   color: white;
    
`;

const Image = styled.Text`
    color: white;
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
    comments,
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
                    {likes ? (<span>{likes.count}개의 좋아요.</span>) : null}    
                
            </Column>
        </HContainer>
    ) : (
        <Container>
            <Poster path={poster} />
            <Column>
                <Title>
                    {title.length > 15 ? `${title.substring(0, 12)}...` : title}
                </Title>
                <Tag>{tag}</Tag>
                {desc ? (
                    <Overview>{desc.length > 117 ? `${desc.substring(0, 120)}...` : desc}</Overview>) : null}
                        {/* node.js에서는 count, 프론트에서는 length로 개수 산정, 태그 앞에 span을 두고 하트를 넣어주면 된다. */}
                        <Tag>
                            <Image role="img" aria-label="rating">⭐️</Image>
                            {" "} {likes.length} {"  "}
                            <Image role="img" aria-label="rating">⭐️</Image>
                            {" "} {comments.length}
                        </Tag>
                
            </Column>
        </Container>
    )
);

HomeItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    likes: PropTypes.array,
    tag: PropTypes.array,
    desc: PropTypes.string,
    comments: PropTypes.array
};

export default HomeItem;