import "../global.css";
import { Slot } from "expo-router";
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import background from "../assets/background.png";
import logo from "../assets/logo.png";

export default function Layout() {

  return (

    <View className="w-full h-full bg-darkBlue">
      {/* <ImageBackground className="" source={{uri: 'https://cdn2.thecatapi.com/images/1R_sq6SyF.jpg'}}> */}
      {/* <ImageBackground
          source={{uri: 'https://cdn2.thecatapi.com/images/1R_sq6SyF.jpg'}}
          className="w-full h-[60%] bg-gradient-to-t from-darkBlue    via-black to-transparent to-100% opacity-10 bg-cover bg-center"        
        > */}
      {/* <View className="h-[60%] bg-gradient-to-t from-darkBlue from-10%   via-black to-transparent to-100% opacity-50"> */}
      <View className="flex  place-items-center ">
        <Image source={logo} className="w-32 h-32" />
        <Text className="text-white font-heebo font-xl">Welcome</Text>
        <Text className="text-white">Login to Onigami your manga companion</Text>
        <View >
          <View >
            <Text className="text-white">Continue with Google</Text>
          </View>
          <View>
            <Text className="text-white">Continue with Discord</Text>
          </View>
        </View>
      </View>
      <View id="Background" className="w-full h-full absolute top-0">
        <View className="h-[60%] w-full  absolute top-0 z-10 bg-gradient-to-t from-darkBlue from-10%    to-transparent to-100%">
        </View>
        <View className="h-[60%] w-full  absolute top-0 z-10 bg-gradient-to-t from-darkBlue from-10%    to-transparent to-100%">
        </View>
        <View className="h-[60%] w-full absolute top-0 overflow-hidden mix-blend-overlay ">
          <Image source={background} className="	object-cover " style={{ width: '100%', height: '100%' }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
  ImageOverlay: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",

  }
});
