import React, { FC }  from 'react';
import { Modal, View ,Dimensions} from 'react-native';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import {Gesture, GestureDetector } from 'react-native-gesture-handler';

const Drawer:FC = () => {
    const { height, width } = Dimensions.get("window");

    // const ranslateY = useSharedValue(height * 0.55)
    
    const test = (event)=>{
      console.log("test");
    }
    
    // const pangesture = Gesture.Pan()
    const pangesture = Gesture.Pan().onStart((event) => {
        // console.log("event", event);
        runOnJS(test)(event);
    }).onUpdate((event) => {
      runOnJS(test)(event);
        // console.log("event", event);
    })
    
    // const tapgesture = Gesture.Tap().onStart((event) => {
    //   console.log("tap event", event);
    // });

    // const gestures = Gesture.Simultaneous(pangesture, tapgesture);
// console.log("ranslateY", ranslateY.value);

    return(
      <>
        <View>
          
        </View>
      </>
      //   <Modal
      //   animationType="none"
      //   transparent={true}
      //   visible={true}
      //   onRequestClose={() => {
      //     console.log("Modal has been closed");
      //   }}
        
      //   >
      //   <View className="w-full h-full  bg-NavBarColor ">          
      //       <GestureDetector gesture={pangesture}>

      //         <View className="absolute bottom-0 w-[100vw] h-[45vh] bg-white rounded-t-3xl">
                  
      //          </View>
      //       </GestureDetector>
      //   </View>
      // </Modal>
    )
}

export default Drawer;

