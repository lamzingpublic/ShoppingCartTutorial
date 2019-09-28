import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../Screens/Home';
import CartScreen from '../Screens/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
const Home = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
         title: "Home"
        };
        
      }
    }
  }
);

Home.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const Cart = createStackNavigator(
    {
      CartScreen: {
        screen: CartScreen,
        navigationOptions: ({ navigation }) => {
          return {
           title: "Cart"
          };
          
        }
      }
    }
  );
  
  Cart.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};






const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home:{screen :Home, navigationOptions:{
      title:'Home', tabBarIcon:({tintColor})=>(
        <Icon name='md-home' size={20} color={tintColor} />
      ),
      tabBarOptions:{style: {
        backgroundColor: '#fefefe',
      },
      activeTintColor:"#ff9a5c",
      inactiveTintColor:"#808080",
      
      }
    }},
    Cart:{screen: Cart,navigationOptions:{
      title:'Cart', tabBarIcon:({tintColor})=>(
       <Icon name='md-cart' size={20} color={tintColor} />
      ),
      tabBarOptions:{
        style: {
        backgroundColor: '#fefefe',
      },
      activeTintColor:"#ff9a5c",
      inactiveTintColor:"#808080",
      
      }
    }}
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    }
  }
);



export default DashboardTabNavigator;
