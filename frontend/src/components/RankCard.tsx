import React from 'react';
import { View, Text,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RankCard() {
  
    return (
    <View id="rankCard" className='flex flex-row w-full h-full rounded-xl bg-[#1C2225] overflow-hidden'>
      <LinearGradient
      className='w-[15%] absolute left-0 h-[25%] z-30 rounded-r-xl '
      colors={['rgba(28,34,37,9)','rgba(28,34,37,1)','rgba(0,0,0,0)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0,0.4,1]}
      ></LinearGradient>
      <View id="title_card" className='h-full w-[15%] z-20 rounded-full overflow-hidden justify-end items-center gap-4 '>

      
        <View className='flex w-[120px] h-[70px]  transform rotate-[270deg]  -translate-y-2 overflow-hidden  justify-center' >
            <Text ellipsizeMode = "clip" numberOfLines={1}
         id="title" className="text-white font-bold font-heebo  text-md whitespace-nowrap" >One Piece</Text>
        </View>
        {/* <View className='bg-white w-[20px] h-[20px]  transform rotate-[270deg]' >
        </View> */}
        {/* <Text  numberOfLines={1} 
         id="title" className="text-white font-bold font-heebo  text-[12px]  transform rotate-[270deg] w-[150px]" >Dr.stonessdsdfdsfsdfsdfdssds</Text> */}
        <Text id="rank" className="text-white font-bold font-heebo text-[36px]    transform rotate-[270deg] mb-2">01</Text>
      </View>
      <LinearGradient 
        colors={['#1C2225','rgba(0,0,0,0)']}
        className="w-[15%] h-full absolute top-0  z-10 rounded-l-xl"
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 1]}
      >

      </LinearGradient>
        <View id="thumbnail" className='h-full w-[33%] bg-Darckblue'>
        <Image
                  source={{ uri: 'https://source.unsplash.com/random'}}
                 
                  className=" rounded-xl w-full h-full"
                  resizeMode="cover"
                />
        </View>
        <View id="description" className='flex m-2 overflow-hidden h-full w-[50%] gap-2'>
          <View id="header " className='flex gap-1'>
            <View id="date" className='flex flex-row justify-between '>  
            <Text className='text-white font-bold font-heebo text-sm'>1999 - つづく</Text>
            <Text className='text-white font-bold text-sm font-heebo mr-2'>9.54</Text>
            </View>
            <Text id="type" className='text-[#9FAFB7] font-medium font-heebo text-xs'>Pirates travel</Text>
            
          </View>
          {/* <View id="body" className=' '> */}
            <Text id="synopsis" className="text-white font-heebo text-xs w-full" numberOfLines={6}>As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer "Red-Haired" Shanks. But his life changed when Luffy accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...</Text>
          {/* </View> */}
          <View id="tags" className='w-full flex flex-row gap-2 '>
            <View id="tag" className='flex items-center justify-center rounded-full bg-[#2E383D]'>
              <Text className='text-[#9FAFB7] font-heebo font-medium text-xs px-[4px] py-[2px]'>action</Text>
            </View>
            <View id="tag" className='flex items-center justify-center rounded-full bg-[#2E383D]'>
              <Text className='text-[#9FAFB7] font-heebo font-medium text-xs px-[4px] py-[2px]'>Adventure</Text>
            </View>
            <View id="tag" className='flex items-center justify-center rounded-full bg-[#2E383D]'>
              <Text className='text-[#9FAFB7] font-heebo font-medium text-xs px-[4px] py-[2px]'>Ereur</Text>
            </View>
          </View>
        </View>

    </View>
  );
}