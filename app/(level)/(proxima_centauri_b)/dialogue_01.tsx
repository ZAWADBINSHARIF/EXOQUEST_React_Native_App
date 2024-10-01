import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import BackButton from '@/components/BackButton';
import useGlobalContext from '@/hooks/useGlobalContext';

const dialogue_01 = () => {

    const { selectedCharacter } = useGlobalContext();

    console.log(selectedCharacter);

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full'
        >

            <BackButton />

            <View className='absolute bottom-5 left-5 justify-center items-center'>
                <Image
                    source={imgs.master}
                />
                <View className='bg-orange-400 px-3 py-1 rounded-lg'>
                    <Text className='text-base text-center'>Master</Text>
                </View>
            </View>

            <View
                className='absolute right-0 bottom-0'
            >
                <Image
                    source={imgs[selectedCharacter]}
                    className='-scale-x-100'
                    style={{
                        width: 257,
                        height: 257
                    }}
                    resizeMode='contain'
                />
            </View>

            <Text>dialogue_01</Text>
        </ImageBackground>
    );
};

export default dialogue_01;