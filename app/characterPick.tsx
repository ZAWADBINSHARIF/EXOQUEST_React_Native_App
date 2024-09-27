import { View, Text, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';

const characterPick = () => {
    return (
        <View
            className='flex-1 w-full h-full'
        >
            <BackButton />

            <Image
                source={imgs.exterior_galaxy}
                className='h-full w-full absolute'
            />


            <Image
                source={imgs.planet_01}
                className='absolute bottom-20 right-0'
            />

        </View>
    );
};

export default characterPick;