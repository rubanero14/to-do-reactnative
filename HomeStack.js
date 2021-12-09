
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './components/Home';
import Add from './components/Add';
import Detail from './components/Detail';


const screens = {
    Home : {
      screen: Home
    },
    Add : {
      screen: Add
    },
    Detail: {
      screen: Detail
    }
  }

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);
