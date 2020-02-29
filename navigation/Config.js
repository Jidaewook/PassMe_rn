import { createStackNavigator} from "react-navigation-stack";
import { BG_COLOR, WHITE } from '../constants/Color';

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: WHITE
    },
    headerTintColor: WHITE
};

// export const headerStyles = {
//     headerStyle: {
//         backgroundColor: BG_COLOR,
//         borderBottomColor: 0
//     },
//     headerTitleStyle: {
//         color: WHITE
//     },
//     headerTintColor: WHITE
// };

export const createdStack = (screen, title) => 
    createStackNavigator({
        Screen: {
            screen, 
            navigationOptions: {
                title, 
                ...headerStyles
            }
        }
    });