import {  useRef,useEffect, useState } from "react";
import "../../global.css";
import { View,  Pressable } from "react-native";
import HomeSolid from "@/assets/icons/HomeSolid";
import { Slot } from "expo-router";
import { router,useNavigation} from 'expo-router';
import { useLocalSearchParams} from 'expo-router';


// export default function Layout() {
//     const [active , setActive] = useState<string>("/");
//     // const navigation = useNavigation();
//     // useEffect(() => {
//     //     console.log(active);
//     // }, [active]);
//     const navigation = useNavigation();
//     const params = useLocalSearchParams();

//     function handlepress(target:string){
//         // navigation.navigate(target as never);
//         router.replace(target);
//         // navigation.navigate(target as never);
//         setActive(target);
//     }
//     useEffect(() => {
//         const unsubscribe = navigation.addListener('state', () => {
//             const state = navigation.getState();
//             console.log('Updated state:', state);
//           });
      
//           return unsubscribe;
//     }, [navigation,active]);
//     // console.log(params);
//     return (
//     <>

//         <Slot/>
        
//         <View className="flex flex-row absolute bottom-0 w-full h-16 bg-NavBarColor  ">
            
           
//             <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("/")}>
//                 <HomeSolid size={32} className="" active={active=="/"}/>
//             </Pressable>
            
//             <Pressable className="flex-1 items-center justify-center" onPress={()=> handlepress("search")}>
//                 <HomeSolid size={32} className=" " active={active=="search"}/>
//             </Pressable>
//             <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("library")}>
//                 <HomeSolid size={32} className="" active={active=="library"}/>
//             </Pressable>
//             <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("login")} >
//                 <HomeSolid size={32} className=" " active={active=="login"}/>
//             </Pressable>
            
//         </View>
//     </>
//   );
// }



export default function Layout() {
    const [active , setActive] = useState<string>("/");
    // const navigation = useNavigation();
    // useEffect(() => {
    //     console.log(active);
    // }, [active]);
    const navigation = useNavigation();
    const params = useLocalSearchParams();

    
    function handlepress(target:string){
        // navigation.navigate(target as never);
        router.navigate(target);
        // navigation.navigate(target as never);
        setActive(target);
    }
    useEffect(() => {
        
        // const unsubscribe = navigation.addListener('state', () => {
            //     const state = navigation.getState();
            //     console.log('Updated state:', state);
            //   });
            
            //   return unsubscribe;
            const state = navigation.getState();
           
        }, [navigation,active]);
        // console.log(params);
        // useEffect(() => {

        //     router.navigate("reader");
        // }, []);
    return (
    <>
     
       
     {/* <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        contentStyle: { backgroundColor: '#181D20' },
      }}
    />         */}
        <Slot/>
        <View className="flex flex-row absolute bottom-0 w-full h-16 bg-NavBarColor  " >
            
           
            <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("/")}>
                <HomeSolid size={32} className="" active={active=="/"}/>
            </Pressable>
            
            <Pressable className="flex-1 items-center justify-center" onPress={()=> handlepress("search")}>
                <HomeSolid size={32} className=" " active={active=="search"}/>
            </Pressable>
            <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("library")}>
                <HomeSolid size={32} className="" active={active=="library"}/>
            </Pressable>
            <Pressable className="flex-1 items-center justify-center" onPress={()=>handlepress("login")} >
                <HomeSolid size={32} className=" " active={active=="login"}/>
            </Pressable>
            
        </View>
    </>
  );
}
