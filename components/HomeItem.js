import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Poster from './Poster';
import {GREY_COLOR} from "../constants/Color";

// 네비게이션에서 터치를 할 수 있게 하는 
import {TouchableWithoutFeedback} from "react-native";
import {withNavigation} from "react-navigation";

const Container = styled.View`
    margin-right: 20px;
    ${'' /* //flex-direction: 자식요소 정렬방향 */}
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
  ${'' /* 100%를 적용해도 너무 길다 */}
  width: 100%;
`;

const HomeItem = ({
    id,
    title,
    poster,
    likes,
    tag,
    desc,
    comments,
    navigation,
    // horizontal이 여기서 확정되어 버리는데, psat은 true, ncs는 false가 되게 하려면 어케 해야 하나
    // homeitem에서 부여해서 설정은 됨. 그런데 가로폭이 화면을 넘어버릴 정도로 길다.
    horizontal=false
}) => (
    <TouchableWithoutFeedback
        onPress={() => 
                navigation.navigate({
                    routeName: "Detail", params: {
                        id, 
                        title, 
                        poster,
                        likes,
                        tag,
                        desc,
                        comments}})
        }
    >
        {horizontal ? (
            <HContainer>
                <Poster path={poster} />
                <Column>
                    <Title big={true}>{title}</Title>
                    <Tag>{tag}</Tag>
                    {desc ? (
                        <Overview>
                            {desc.length > 30 ? `${desc.substring(0, 29)}...` : desc}
                        </Overview>
                    ) : null}
                    
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
        )}
    </TouchableWithoutFeedback>
    
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

export default withNavigation(HomeItem);