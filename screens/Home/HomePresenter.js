import React from 'react';
import {Text, ScrollView} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import HomeSlider from "../../components/HomeSlider";
import Section from "../../components/Section";
import { BG_COLOR } from '../../constants/Color';
import styled from 'styled-components';
import HomeItem from '../../components/HomeItem';

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const HomePresenter = ({loading, totaldata}) => 
    loading ? ( 
        <Loader /> 
    ) : (
        <Container>
            { totaldata ? (
                    <HomeSlider sliderData={totaldata} />

            ) : null  } 
            { totaldata ? (
                
                    <Section title="인기 게시물">
                        {totaldata
                            .filter(data => data.bbsimg !== null)
                            .map(data => (
                                <HomeItem 
                                    key={data._id}
                                    title={data.title}
                                    bbsimg={data.bbsimg}

                                />
                            )) 
                        }
                    </Section>
            ) : null}
        </Container>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    totaldata: PropTypes.array
};

export default HomePresenter;