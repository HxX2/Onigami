import React from 'react';
import { ScrollView, View, Text,Dimensions} from 'react-native';
// import rankCard from '@/components/RankCard';
import RankCard from '@/components/RankCard';

export default function search() {
    const { width, height } = Dimensions.get('window');

    console.log(width);
    return (
        <ScrollView className='flex  bg-darkBlue w-full h-full'  style={{ paddingHorizontal: 16 }}>
            <View className='flex h-full w-full justify-center items-center gap-4'>
                <View id="margins" className='h-[170px] w-full ' >
                    <RankCard/>
                </View>
                <View id="margins" className='h-[170px] w-full ' >
                    <RankCard/>
                </View>
                <View id="margins" className='h-[170px] w-full ' >
                    <RankCard/>
                </View>
                <View id="margins" className='h-[170px] w-full ' >
                    <RankCard/>
                </View>
                <View id="margins" className='h-[170px] w-full ' >
                    <RankCard/>
                </View>
            </View>
        </ScrollView>
    );
}