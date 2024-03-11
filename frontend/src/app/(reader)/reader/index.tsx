import React, { FC, ReactElement } from "react";
import {
  Text,
  Modal,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,

} from "react-native";
import {
  GestureHandlerRootView,
  State,
  TapGestureHandler,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
// import { color } from 'react-native-elements/dist/helpers';
// import ImageViewer from "react-native-image-zoom-viewer";
import { BlurView } from "expo-blur";
import { useEffect, useRef } from "react";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { preventAutoHideAsync } from "expo-splash-screen";
import { Touchable } from "react-native";

import {Footer} from "@components/reader/Footer";

const images = [
  {
    url: "https://i.pinimg.com/originals/28/8e/28/288e28e4c49e37a5dd77bc71347e03bd.jpg",
  },
  {
    url: "https://source.unsplash.com/random",
  },
  {
    url: "https://source.unsplash.com/random",
  },
];

interface IndicatorProps {
  currentIndex: number;
  allSize: number;
}

const Indicator: FC<IndicatorProps> = ({
  currentIndex,
  allSize,
}): ReactElement => {
  console.log("currentIndex:", currentIndex);
  return (
    <View className="flex w-full justify-center items-center">
      <View className="flex absolute bottom-0 w-[65px] h-[40px]  items-center justify-center bg-[#24313C] rounded-full">
        <Text className=" text-white font-bold font-heebo  text-medium  ">
          {currentIndex + "/" + allSize}
        </Text>
      </View>
    </View>
  );
};

interface HeaderProps {
  visible: boolean;
}

const Header: FC<HeaderProps> = ({ visible }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <>
    {/* <StatusBar
    animated={true}
    // backgroundColor="#61dafb"
    // barStyle={statusBarStyle}
    // showHideTransition={statusBarTransition}
    hidden={true}
  /> */}
    <Animated.View
      className="w-full h-[120px] absolute top-0  z-20"
      style={{ opacity: fadeAnim }}
    >
      <View className="w-full h-full absolute top-0  z-30 flex justify-end pb-4">
        <Text className="text-white font-bold text-xl font-heebo">
          Solo Leveling
        </Text>
        <Text
          id="chapter"
          className="text-white font-bold text-sm font-heebo opacity-70"
        >
          chapter-01
        </Text>
      </View>
      <BlurView
        intensity={100}
        tint="dark"
        className="flex w-full  bg-NavBarColor h-[120px]  "
      >
        <View className="flex w-full h-full justify-center items-center bg-NavBarColor"></View>
      </BlurView>
    </Animated.View>
    </>
  );
};



export default function ReaderIndex() {
  const [visible, setVisible] = React.useState(true);
  const { height, width } = Dimensions.get("window");



  return (
    <>
        <GestureHandlerRootView style={{ flex: 1 }}>

      <Header visible={visible} />
      <ScrollView
        className="bg-darkBlue w-full h-full "
        style={{ height: height, width: width }}
      >
          <View>        
            <View >
               <ImageZoom
                uri={images[0].url}
                minScale={0.5}
                maxScale={3}
                resizeMode="cover"
                style={{
                  width: width,
                  height: height,
                }}
                isDoubleTapEnabled={true}
                onPress={(event) => {
                  setVisible(!visible);
                  console.log("event", event);
                }}
              /> 
            </View>
                
          </View>
      </ScrollView>
      <Indicator currentIndex={1} allSize={3} />
      <Footer visible={visible} />
        </GestureHandlerRootView>

    </>
  );
}
