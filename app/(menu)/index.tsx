import { View, Text, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';

const index = () => {

    return (
        <View className='flex-1 h-full w-full'>

            <Image
                source={imgs.sky_bg}
                className='absolute w-full h-full'
            />
        </View>
    );
};

export default index;