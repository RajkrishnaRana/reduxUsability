import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import HomeScreen from './src/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
