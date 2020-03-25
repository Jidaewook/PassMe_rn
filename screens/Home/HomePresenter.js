import React from 'react';
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
                                desc={data.desc}
                                tag={data.tags}
                                likes={data.likes}
                                comments={data.comments}
                                // horizontal={false}
                            />
                        ))
                        }
                </Section>
            ) : null }

            { ncs ? (
                <Section horizontal={false} title="NCS 강좌" >
                    {ncs
                        .filter(data => data.bbsimg !== null)
                        .map(data => (
                            <HomeItem
                                key={data._id}
                                id={data._id}
                                title={data.title}
                                poster={data.bbsimg}
                                tag={data.tags}
                                desc={data.desc}
                                likes={data.likes}
                                comments={data.comments}
                                horizontal={true}
                            />
                        ))
                    }
                </Section>
                

            ) : null }
        </Container>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    totaldata: PropTypes.array,
    psat: PropTypes.array, 
    ncs: PropTypes.array
};

export default HomePresenter;