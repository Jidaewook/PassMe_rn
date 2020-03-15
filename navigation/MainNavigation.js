import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Tab_Nav from "./Tab_Nav";

import DetailScreen from "./../screens/Detail";
import { headerStyles } from "./Config";

const Main_Nav = createStackNavigator(
    {
        Tabs: {
            screen: Tab_Nav,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles
            }
        }

    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(Main_Nav);