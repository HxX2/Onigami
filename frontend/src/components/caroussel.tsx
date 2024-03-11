import { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  PanResponder,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
// import  Pagination  from '';

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

export default function MyCaroussel() {
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      console.log(gestureState.dx);
      if (gestureState.dx > 0) {
        setDirection(-1);
      } else if (gestureState.dx < 0) {
        setDirection(1);
      }
    },
  });

  
  return (
    <View
      id="caroussel"
      className="w-full h-[340px] bg-white "
      {...panResponder.panHandlers}
    >
      <LinearGradient
        colors={["rgba(24,29,32,1)", "rgba(24,29,32,0.5)", "rgba(0,0,0,0)"]}
        className="w-full h-[341px]  absolute top-0  z-10"
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0, 0.4, 0.8]}
        pointerEvents="none"
      ></LinearGradient>
      <LinearGradient
        colors={["rgba(24,29,32,1)", "rgba(24,29,32,0.5)", "rgba(0,0,0,0)"]}
        className="w-full h-[341px]  absolute top-0  z-10"z
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0, 0.4, 0.8]}
        pointerEvents="none"
      ></LinearGradient>

      <View pointerEvents="box-none">

      <Carousel
      
        // onScrollStart={(index) => setActiveIndex(index)}
        onScrollStart={() =>
          setActiveIndex((prev) => {
            if (prev == dat.length - 1 && direction == 1) {
              return 0;
            }
            if (prev == 0 && direction == -1) {
              setDirection(1);
              return dat.length - 1;
            }
            if (direction == -1) {
              setDirection(1);
              return prev - 1;
            }
            return prev + 1;
          })
        }
        snapEnabled={true}
        pagingEnabled={true}
        loop={true}
        width={width}
        height={330}
        scrollAnimationDuration={1000}
        autoPlay={true}
        //  onSnapToItem={(index) => setActiveIndex(index)}
        data={dat}
        renderItem={({ item, index }) => {
          // setActiveIndex(index);
          return (
            <View className="flex w-full h-full">
              <Image
                source={{ uri: item.thumbnail }}
                alt={item.title}
                className=" rounded-xl w-full h-full"
                resizeMode="cover"
              />
            </View>
          );
        }}
      />

      </View>
      {/* </View> */}
      <View
        id="caroussel_details"
        className="w-full h-[50px]  absolute bottom-12 z-20 ml-4"
      >
        <Text className="text-white font-heboo font-bold text-xl">
          
          Boku no Hero Academia
        </Text>
        <Text className="text-[#768B98] font-heboo font-semibold text-sm">
          
          Superhero • Super Power
        </Text>
        <View className="flex flex-row gap-2 ">
          {dat.map((_, i) => (
            <View
              key={i}
              style={{
                width: i === activeIndex ? 15 : 8,
                height: i === activeIndex ? 10 : 8,
                borderRadius: 5,
                backgroundColor: i === activeIndex ? "#D3D3D3" : "#595959",
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
