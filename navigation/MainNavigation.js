import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Tab_Nav from "./Tab_Nav";
import { EdgeInsetsPropType } from "react-native";

const Main_Nav = createStackNavigator(
    {
        Tabs: {
            screen: Tab_Nav,
            navigationOptions: {
                header: null
            }
        }
    },
    {}
);

export default createAppContainer(Main_Nav);