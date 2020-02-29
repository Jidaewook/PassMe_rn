import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {ACTIVE_COLOR, BG_COLOR} from "../constants/Color";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
    justify-content: center;
`;

export default () => (
    <View>
        <ActivityIndicator color={ACTIVE_COLOR} />

    </View>
);
