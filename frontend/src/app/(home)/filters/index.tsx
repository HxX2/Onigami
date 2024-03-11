import React from 'react';
import { ScrollView, View, Text} from 'react-native';

export default function filters() {
    return (
        <ScrollView className='flex  bg-darkBlue h-full w-full gap-4'>
            <View className='flex h-full w-full gap-4 items-center justify-center'>
                <Text className='text-white text-20'>hello IM FIlters page</Text>
            </View>
        </ScrollView>
    );
}