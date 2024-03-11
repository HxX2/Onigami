import React, { FC, useEffect, useRef } from "react";
import {
  Animated,
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBarStyle,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";

import BrushSolid from "@/assets/icons/BrushSolid";
import DownloadSolid from "@/assets/icons/DownloadSolid";
import TranslateSolid from "@/assets/icons/TranslateSolid";
import Setting from "@/components/reader/Footer/Setting";

import HomeSolid from "@/assets/icons/HomeSolid";
// import {Drawer} from "@/components/Drawer";
import RBSheet from "@poki_san/react-native-bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";

interface FooterProps {
  visible: boolean;
}

const Footer: FC<FooterProps> = ({ visible }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      className="w-full   h-16  absolute bottom-0  z-20"
      style={{ opacity: fadeAnim }}
    >
      <BlurView
        intensity={100}
        tint="dark"
        className=" w-full  bg-NavBarColor h-16  absolute bottom-0"
      >
        <View className="flex flex-row w-full h-full justify-between items-center  bg-NavBarColor px-12">
          {/* <HomeSolid size={32} className="text-white bg-white"/> */}
          <DownloadSolid size={24} className="" />
          {/* <Download /> */}
          <Setting />
          <TranslateSolid size={24} className="text-white" />
          <BrushSolid size={24} className="text-white" />
        </View>
      </BlurView>
    </Animated.View>
  );
};

export default Footer;
