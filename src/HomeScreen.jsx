import {View, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native-paper';
import {increment, decrement} from '../redux/slices/counter/counterSlice';

const HomeScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button mode="contained" onPress={() => dispatch(increment())}>
        Increment
      </Button>
      <Text style={{fontSize: 30}}>Counter is {count}</Text>
      <Button
        mode="contained"
        onPress={() => {
          dispatch(decrement());
          // console.log('pressed');
        }}>
        Decrement
      </Button>
    </View>
  );
};

export default HomeScreen;
