import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import PointAndFuelView from '@/components/PointAndFuelView';
import useGlobalContext from '@/hooks/useGlobalContext';
import Animated, { BounceInLeft } from 'react-native-reanimated';



const galacticKeyReward = () => {

    const { selectedCharacter } = useGlobalContext();

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >
            <PointAndFuelView />

            <Animated.View
                className='absolute bottom-0 left-5'
                entering={BounceInLeft.springify().damping(100)}
            >
                <Image
                    source={imgs.master2}
                    style={{
                        width: 257,
                        height: 257,
                    }}
                    resizeMode='contain'
                />
            </Animated.View>


            <View
                className='absolute bottom-0 -right-5'
            >
                <Image
                    source={imgs[selectedCharacter]}
                    style={{
                        width: 257,
                        height: 257,
                        transform: [
                            {
                                scaleX: -1
                            }
                        ]
                    }}
                    resizeMode='contain'
                />
            </View>


        </ImageBackground>
    );
};

export default galacticKeyReward;