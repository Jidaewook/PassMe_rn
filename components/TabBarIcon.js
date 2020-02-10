import React from 'react';
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR} from "../constants/Color";

const TabBarIcons = ({name, focused}) => (
    <Ionicons 
        size={26}
        name={name}
        color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
    />
);

TabBarIcons.propTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired
};

export default TabBarIcons;
