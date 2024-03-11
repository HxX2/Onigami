import React from 'react';
import { Slot } from 'expo-router';
import { View,Text} from 'react-native';

export default function Layout() {
  return (
    <>
      <Slot />
      {/* <View id="navBAr" className='w-full h-[30px]'>
            <View id="Download">

            </View>
            <View id="Settings"></View>
            <View id="language"></View>
            <View id="brush"></View>
      </View> */}
    </>
  );
}