import React, { useEffect, useRef } from "react";
import { Dimensions, TouchableOpacity, View, Text,TouchableWithoutFeedback } from "react-native";
import RBSheet from "@poki_san/react-native-bottom-sheet";
import SelectDropdown from "react-native-select-dropdown";

import SettingSolid from "@/assets/icons/SettingSolid";
import HomeSolid from "@/assets/icons/HomeSolid";
import ArrowDown from "@/assets/icons/ArrowDown";
import { Gesture,GestureDetector, ScrollView } from "react-native-gesture-handler";
import Animated,{runOnJS ,useSharedValue,withTiming,Easing,ReduceMotion, useAnimatedStyle,  interpolateColor} from "react-native-reanimated";
// import { Switch } from "react-native-switch";
// import { Switch } from "react-native-switch";
// import Switch from 'react-native-draggable-switch';



interface Props {
  withSwitch?: Number;
  value?: Boolean;
  onValueChange?: Function;
  containerheight?: Number;
  containerwidth?: Number;
}


const Switch:React.FC = () =>{
  const [active, setActive] = React.useState(false);
  const inactiveContainer="  h-[32]  border-[2px] "
  const activeContainer = "  h-[34px] "
  const position = useSharedValue(0); // Initial position
  var borderColor = useSharedValue(0);
  var CercleColor = useSharedValue(0);

  const inactiveCercle = "bg-[#A6B0B5]  ml-[2px]"
  const activeCercle = "bg-[#ADD9F5]  mr-[4.5x]"
  
  const ContaineranimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        borderColor.value,
        [0, 1],
        ['#00000000', '#17435F']
      ),
      borderColor:  interpolateColor(
        borderColor.value,
        [0, 1],
        ['#A6B0B5', '#00000000']
      ),
    };

  });

  const CercleanimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        CercleColor.value,
        [0, 1],
        ['#A6B0B5', '#ADD9F5']
      ),
    };
  });

  useEffect(() => {
    position.value = withTiming(active ? 25 : 0,  {
      duration: 400,
      easing: Easing.elastic(0.8),
      reduceMotion: ReduceMotion.System,
    });

  borderColor.value = withTiming(active ?  1: 0,  {
    duration: 400,
    easing: Easing.elastic(0.8),
    reduceMotion: ReduceMotion.System,
  });

  CercleColor.value = withTiming(active ?  1: 0,  {
    duration: 400,
    easing: Easing.elastic(0.8),
    reduceMotion: ReduceMotion.System,
  });

  }, [active]);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     borderColor: interpolateColor(
  //       borderColor.value,
  //       [0, 1],
  //       ['#A6B0B5', 'green']
  //     ),
  //   };


  return(
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("onPress");
        setActive(!active);
      }}
    >
    
    <Animated.View className={`flex justify-center w-[52px]  rounded-full ${active?activeContainer:inactiveContainer} `}
      style={ContaineranimatedStyle}
    >
      <Animated.View className={`flex w-[24px] h-[24px] rounded-full ${active?activeCercle:inactiveCercle} `}

          style={[{
            transform: [{ translateX: position }],
          },CercleanimatedStyle]}
        
      ></Animated.View>
    </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const Setting = () => {
  const refRBSheet = useRef<RBSheet | null>(null);
  const { height, width } = Dimensions.get("window");
  const [active, setActive] = React.useState(false);
  // useEffect(() => {
  //   console.log("Setting", refRBSheet.current);
  // }, [refRBSheet.current]);

  const ReadingMode = [
    "Vertical",
    "Left To Right",
    "Right To Left",
    "Continuous",
  ];
  const ScaleType = ["Fit Screen", "Stretch", "Fit Width", "Fit Height"];
  const activeContainer = {
    borderColor: "#17435F",
    borderWidth: 2,
  }

  const inactiveContainer = {
    borderColor: "#A6B0B5",
    borderWidth: 2,
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current?.open();
        }}
      >
        <SettingSolid size={24} className="text-white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("event", event);
        }}
      >
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={height * 0.45}
          // minStartHeight={300}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: "#181D20",
            },
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#898F93",
            },
          }}
        >
          <ScrollView className="px-4">
            <Text className="text-white font-heebo font-bold text-2xl">
              Reader Settings
            </Text>
            <View id="settings" className="flex gap-10 py-8">
              <View
                id="readeingMode"
                className="flex flex-row items-center justify-between"
              >
                <Text className="text-white font-heebo font-medium text-xl opacity-95">
                  Reading Mode
                </Text>
                <SelectDropdown
                  data={ReadingMode}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                  buttonStyle={{
                    height: 40,
                    width: 150,
                    backgroundColor: "transparent",
                    borderColor: "#2E383D",
                    borderWidth: 2,

                    borderRadius: 5,
                  }}
                  buttonTextStyle={{
                    color: "#A6B0B5",
                    fontSize: 16,
                    fontWeight: "normal",
                    fontFamily: "Heebo",
                  }}
                  defaultValueByIndex={0}
                  dropdownStyle={{
                    backgroundColor: "#181D20",
                    borderColor: "#2E383D",
                    borderWidth: 2,
                    borderRadius: 5,
                  }}
                  rowStyle={{
                    backgroundColor: "#181D20",
                    borderBottomColor: "transparent",
                    borderBottomWidth: 1,
                  }}
                  rowTextStyle={{
                    color: "#A6B0B5",
                    fontSize: 16,
                    fontWeight: "normal",
                    fontFamily: "Heebo",
                  }}
                  dropdownOverlayColor="transparent"
                  renderDropdownIcon={() => {
                    return (
                      <ArrowDown
                        size={16}
                        color="#A6B0B5"
                        className="text-white"
                      />
                    );
                  }}
                />
              </View>
              <View
                id="scaleType"
                className="flex flex-row items-center justify-between"
              >
                <Text className="text-white font-heebo font-medium text-lg opacity-95">
                  Scale Type
                </Text>
                <SelectDropdown
                  data={ScaleType}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                  buttonStyle={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    width: 150,
                    backgroundColor: "transparent",
                    borderColor: "#2E383D",
                    borderWidth: 2,

                    borderRadius: 5,
                  }}
                  buttonTextStyle={{
                    color: "#A6B0B5",
                    fontSize: 16,
                    fontWeight: "normal",
                    fontFamily: "Heebo",
                  }}
                  defaultValueByIndex={0}
                  dropdownStyle={{
                    backgroundColor: "#181D20",
                    borderColor: "#2E383D",
                    borderWidth: 2,
                    borderRadius: 5,
                  }}
                  rowStyle={{
                    backgroundColor: "#181D20",
                    borderBottomColor: "transparent",
                    borderBottomWidth: 1,
                  }}
                  rowTextStyle={{
                    color: "#A6B0B5",
                    fontSize: 16,
                    fontWeight: "normal",
                    fontFamily: "Heebo",
                  }}
                  dropdownOverlayColor="transparent"
                  dropdownIconPosition="right"
                  renderDropdownIcon={() => {
                    return (
                      <ArrowDown
                        size={16}
                        color="#A6B0B5"
                        className="text-white"
                      />
                    );
                  }}
                />
              </View>
              <View
                id="ScreenMode"
                className="flex flex-row items-center justify-between h-[32px]"
              >
                <Text className="text-white font-heebo font-medium text-lg opacity-95">
                  Full Screen Mode
                </Text>
                <Switch />
              </View>
              <View id="PageAnimation" className="flex flex-row items-center justify-between h-[32px]">
                <Text className="text-white font-heebo font-medium text-lg opacity-95">
                  Page Animation
                </Text>
                <Switch />
              </View>
              
            </View>
          </ScrollView>
        </RBSheet>
      </TouchableOpacity>
    </>
  );
};

export default Setting;
