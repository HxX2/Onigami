
import React, { useEffect } from 'react';
import {  Text, View, Image, TouchableOpacity} from 'react-native';
import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import google from "@/assets/google.png";
import discord from "@/assets/discord.png";
import { LinearGradient } from 'expo-linear-gradient';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { supabase,checkLocalStorage } from 'utils/supabase';


// import 'react-native-url-polyfill/auto'

// import { createClient } from '@supabase/supabase-js'

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const supabase = createClient("https://zmnseamssdvlqexjdpgg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbnNlYW1zc2R2bHFleGpkcGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzA0NTgsImV4cCI6MjAyMjkwNjQ1OH0.DGyXelWw8lA3R8nHkWnEYDzGU9yUGHSt5HorL1r7tOk", {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// });

export default function Page() {

  async function  handlePress() {

      try {
        await GoogleSignin.hasPlayServices()
        const userInfo = await GoogleSignin.signIn()

        if (userInfo.idToken) {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: userInfo.idToken,
          })
          // console.log('data', data)
          // console.log('error', error)
          // const session = await supabase.auth.getUser()
          // console.log('userInfo', userInfo)
          
          // console.log( session.data.user.identities[0].identity_data)
        } else {
          throw new Error('no ID token present!')
        }
      } catch (error: any) {
        // console.log('error', statusCodes)
        // console.log('error', error)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    
  }

  // checkLocalStorage();
  // // useEffect(() => {
    //   GoogleSignin.configure({
      //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      //     webClientId: '896333113497-bn5ufiq3s8ppe6go27hri3v1e3tlqv9m.apps.googleusercontent.com',
      //   })
      // }, [])
      // console.log("Page", supabase);
      
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: '508183338973-lk527rm653f2mdrk4dsli4m2ifu74pgp.apps.googleusercontent.com',
      })
      // console.log("Page", GoogleSignin.isSignedIn());
      return (

    <View className="w-full h-full bg-darkBlue">
      <View className="flex w-full h-full  justify-center items-center z-10">
        <Image source={logo} className="w-32 h-32" />
        <View className="flex mt-12 mb-8 justify-center items-center gap-2">
          <Text className="text-white font-heebo font-bold text-2xl ">WELCOME</Text>
          <Text className="text-white font-heebo">Login to Onigami your manga companion</Text>
        </View>
        <View className="flex gap-4 justify-center items-center"> 
          <TouchableOpacity onPress={handlePress}  className="flex flex-row justify-center items-center bg-[#1F2529] rounded-full gap-2 w-[222px] h-[52px]">
            {/* <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={}
            /> */}
            <Image source={google} className="w-6 h-6" />
            <Text className="text-white font-heebo font-bold text-[12px]">Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} className="flex flex-row  bg-[#1F2529] rounded-full gap-2 justify-center items-center w-[222px] h-[52px]">
            <Image source={discord} className="w-6 h-6 " />
            <Text className="text-white font-heebo font-bold text-[12px]">Continue with Discord</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View id="Background" className="w-full h-full absolute top-0 bg-darkBlue">
        <LinearGradient
        
          colors={['rgba(24,29,32,9)','rgba(24,29,32,0.8)','rgba(0,0,0,0)']}
          className="w-full h-[60%]  absolute top-0  z-20"
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          locations={[0, 0.5, 1]}
          >
        </LinearGradient>
        
        <View className="h-[60%] w-full absolute top-0 overflow-hidden " >
          <View className="w-full h-full absolute top-0  z-10 bg-lightBlue ">
          </View>
          <Image source={background} className="absolute top-0" style={{ width: '100%', height: '120%' }} resizeMode={'cover'}/>
        </View> 
      </View> 
    </View>
  );
}
