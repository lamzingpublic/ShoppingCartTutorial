import React from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './store'
import { createStore } from 'redux';
const Store = createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
 
  render() {
    console.disableYellowBox = true;
        return (
          <View style={{ flex: 1 }}>
            <Provider store={Store}>
              <AppNavigator />
            </Provider>
          </View>
        );  
    }
}