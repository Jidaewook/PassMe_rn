import React from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import {LinearGradient} from "expo-linear-gradient";
import Poster from  "../../components/Poster";

import styled from 'styled-components';
import { BG_COLOR } from '../../constants/Color';

const Container = styled.ScrollView`
    background-color: ${BG_COLOR}
`;

const Header = styled.View`
    position: relative;
`;

const BgImage = styled.Image`

`;

const Content = styeld.View`

`;

const Column = styled.View`
`;

const Title = styled.Text`

`;

const MainContent = styled.View`
`;

const ContentTitle = styeld.Text`

`;

const ContentValue = styled.Text`
`;

const DataContainer = styeld.View`
`;

const Genres = styled.Text`
`;


// 함수 실행은 (), 자바스크립트, 데이터 실행은 {}
const DetailPresenter = ({
    id,
    title,
    desc, 
    category,
    bbsimg,
    likes,
    comments,
    createdAt,
    updatedAt,
    tags
}) => (
    <Container>
        <Header>
            <BgImage />
            <LinearGradient>
                <Content>
                    <Poster />
                    <Column>
                        <Title>{title}</Title>
                        
                        
                    </Column>
                </Content>
            </LinearGradient>
            <MainContent>
                {/* 기획안에 따라서 데이터컨테이너/콘텐트타이틀/컨텐트뷰가 계속 돌면서 설명항목 반복 */}
                <DataContainer>
                    <ContentTitle>강좌설명</ContentTitle>
                    <ContentValue>{desc}</ContentValue>
                </DataContainer>
            </MainContent>
            
        </Header>
    </Container>
);

DetailPresenter.propTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string,
    bbsimg: PropTypes.string,
    likes: PropTypes.array,
    comments: PropTypes.array,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    tags: PropTypes.array
}

export default DetailPresenter;