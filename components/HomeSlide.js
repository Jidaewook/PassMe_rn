import React from 'react';
import {View, ProgressBarAndroidComponent} from 'react-native';
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import Poster from "../components/Poster";
import {ACTIVE_COLOR, BG_COLOR} from "../constants/Color";

const Container = styled.View`
    flex: 1;
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height/3};
    opacity: 0.3;
    position: absolute;

`;

const Title = styled.Text`
    color: white;
    font-size: 30px;
    text-align: center;
    margin-top: 100px;
    font-weight: 600;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: space-between;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;


const Overview = styled.Text`
  
  font-size: 12px;
  margin-bottom: 10px;
  color: white;
`;

const VoteContainer = styled.View`
  margin: 10px 0px;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  border-radius: 5px;
  padding: 8px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 12px;
`;


const HomeSlide = ({
    bbsimg,
    title,
    desc,
    tag,
    likes,
    comments
}) => (
    <Container>
        <BgImage source={{uri: makePhotoUrl(bbsimg)}} />
        <Content>
            <Poster path={bbsimg}/>
            <Column>
                <Title>{title}</Title>
                {tag}
                {desc ? (
                <Overview>{desc.length > 117 ? `${desc.substring(0, 120)}...` : desc }</Overview> ): null}
                <BtnContainer>
                    <BtnText>View Details</BtnText>
                </BtnContainer>
            </Column>
        </Content>


        {/* <View> 
            <Title>
                {title}
            </Title>
        </View>
        <View>
            <Desc>
                {desc.slice(0, 100)}
            </Desc>
        </View>
         */}
    </Container>
);

HomeSlide.propTypes = {
    bbsimg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.array,
    likes: PropTypes.array,
    comments: PropTypes.array,
    id: PropTypes.string
};

export default HomeSlide;