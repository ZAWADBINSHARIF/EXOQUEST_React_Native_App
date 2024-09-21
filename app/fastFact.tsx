import { View, Text, Image, useWindowDimensions, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import imgs from '@/constants/images';
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import BackButton from '@/components/BackButton';


const fastFact = () => {

    const imgWidth = 187;
    const dialogue_box_width = 211;

    const right = useSharedValue<'auto' | number>(0);
    const left = useSharedValue<'auto' | number>('auto');
    const scaleX = useSharedValue(1);

    const { width } = useWindowDimensions();

    const animationViewStyle = useAnimatedStyle(() => {
        return {
            'position': 'absolute',
            bottom: 0,
            right: right.value,
            left: left.value,
        };
    });

    const animationImageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scaleX: scaleX.value
                }
            ]
        };
    });

    useEffect(() => {

        if (width <= 0)
            return;

        right.value = withDelay(50, withSpring(width - imgWidth - dialogue_box_width, {
            damping: 10,
            stiffness: 100,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
        }));
        scaleX.value = withDelay(50, withTiming(-1, { 'duration': 500 }));

    }, [width]);

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

            <Animated.View
                style={animationViewStyle}
                className='absolute justify-end flex-row-reverse items-center'
            >
                <Animated.View entering={FadeIn.springify().stiffness(100).damping(30)}>
                    <ImageBackground
                        source={imgs.dialogue_box}
                        style={{
                            width: 211,
                            height: 125,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 8,
                            marginLeft: -50
                        }}
                    >
                        <Text className='text-black font-bold text-lg'>What is an</Text>
                        <Text className='text-black font-900 text-lg' >Exoplanet?.</Text>
                    </ImageBackground>
                </Animated.View>

                <Animated.Image
                    source={imgs.start_boy}
                    style={animationImageStyle}
                />
            </Animated.View>
        </View>
    );
};

export default fastFact;