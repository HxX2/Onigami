import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Animated,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import Carousel from "@components/caroussel";
import { supabase } from "utils/supabase";
import { Stack,router } from "expo-router";

const images = new Array(6).fill(
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
);

const dat = [
  {
    title: "Dr.stone",
    thumbnail: "https://source.unsplash.com/random",
  },
  {
    title: "Solo leveling",
    thumbnail: "https://source.unsplash.com/random",
  },
  {
    title: "Ereur inComonCorefsdfdfsdfsd",
    thumbnail: "https://source.unsplash.com/random",
  },
  {
    title: "Dr.stone",
    thumbnail: "https://source.unsplash.com/random",
  },
  {
    title: "name",
    thumbnail: "https://source.unsplash.com/random",
  },
  {
    title: "name",
    thumbnail: "https://source.unsplash.com/random",
  },
];
import { checkLocalStorage } from "utils/supabase";
import { Touchable } from "react-native";
import { Button } from "react-native-elements";

export default function Home() {
  // const {width} = Dimensions.get('window')
  // const scrollX = useRef(new Animated.Value(0)).current;
  // const {width: windowWidth} = useWindowDimensions();
  // const user = supabase.auth.getSession();
  // console.log("session",user);
  // checkLocalStorage();

  // console.log("session", test);
  // useEffect(() => {
  //   router.navigate("reader");

  // }, []);
  return (
    <>
      {/* <Button onPress={()=>router.navigate("reader")}></Button> */}
      <ScrollView className="flex  bg-darkBlue h-full w-full ">
    
      <Carousel />
      <View id="content" className="w-full h-15 bg-darckBlue flex gap-4 ml-4 ">
        <Text className="font-heebo text-white font-bold text-xl">
          Continue Reading
        </Text>
        <ScrollView
          horizontal={true}
          className="flex gap-4"
          showsHorizontalScrollIndicator={false}
        >
          {dat.map((item, index) => (
            <View key={index} className="w-[150px] h-[230px] mr-2 ">
              <View className="w-[129px] h-[194px]">
                <Image
                  source={{ uri: item.thumbnail }}
                  alt={item.title}
                  className=" rounded-xl w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <Text
                numberOfLines={1}
                className="w-full font-heebo text-white font-bold text-sm "
              >
                {item.title}
              </Text>
              <View className="w-full h-[10px] items-end">
                <LinearGradient
                  colors={["rgba(24,29,32,1)", "rgba(0,0,0,0)"]}
                  className="w-[60%] h-[15px]  absolute bottom-3  z-20"
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                  locations={[0, 0.8]}
                ></LinearGradient>
              </View>
                <View id="progress-Bar" className="w-[85%]">
                  <View className="w-[100%] h-[3px] bg-[#3A484F] absolute bottom-1 z-10 rounded-full"></View>
                  <LinearGradient
                  colors={["#A5E5E7", "#177EBE"]}
                  className="w-[50%] h-[3px] absolute bottom-1 z-10 rounded-full "
                  start={{ x: 1, y: 0.5 }}
                  end={{ x: 0, y: 0.5 }}
                  locations={[0, 0.8]}
                ></LinearGradient>
                </View>
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
