import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import PointAndFuelView from '@/components/PointAndFuelView';
import imgs from '@/constants/images';

const endMessage = () => {
    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >
            <PointAndFuelView />




        </ImageBackground>
    );
};

export default endMessage;