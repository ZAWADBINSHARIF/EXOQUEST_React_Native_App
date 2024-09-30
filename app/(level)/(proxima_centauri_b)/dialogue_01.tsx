import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import Master from '@/components/svgs/Master';
import BackButton from '@/components/BackButton';

const dialogue_01 = () => {
    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full'
        >

            <BackButton />

            <View className='absolute bottom-5 left-5'>
                <Master />
            </View>

            <Text>dialogue_01</Text>
        </ImageBackground>
    );
};

export default dialogue_01;