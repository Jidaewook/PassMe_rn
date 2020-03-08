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

const HomePresenter = ({loading, totaldata, psat, ncs}) => 
    loading ? ( 
        <Loader /> 
    ) : (
        <Container>
            { totaldata ? (<HomeSlider sliderData={totaldata} />) : null  } 
            { psat ? (
                <Section title="PSAT 강좌">
                    {psat 
                        .filter(data => data.bbsimg !== null)
                        .map(data => (
                            <HomeItem
                                key={data._id}
                                id={data._id}
                                title={data.title}
                                poster={data.bbsimg}

                            />
                        ))
                        }
                </Section>

                )
             : null}
            {ncs ? (
                <Section title="NCS 강좌" horizontal={false}>
                    {ncs
                        .filter(data => data.bbsimg !== null)
                        .map(data => (
                            <HomeItem
                                key={data._id}
                                id={data._id}
                                title={data.title}
                                poster={data.bbsimg}

                            />
                        ))
                    }
                </Section>

            )
                : null}
        </Container>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    totaldata: PropTypes.array,
    psat: PropTypes.array, 
    ncs: PropTypes.array
};

export default HomePresenter;