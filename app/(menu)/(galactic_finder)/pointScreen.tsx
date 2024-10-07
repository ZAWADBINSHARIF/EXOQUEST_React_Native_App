import { View, Text } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import useGlobalContext from '@/hooks/useGlobalContext';

const pointScreen = () => {

    const { prevScore } = useLocalSearchParams();
    const { point, setPoint } = useGlobalContext();

    console.log(prevScore);

    return (
        <View className='bg-black flex-1'>
            <View className='flex-1 justify-center items-center'>
                <FontAwesome5 name="coins" size={56} color='orange' />
                <Text className='text-white text-3xl font-[default]'>You earned {parseInt(prevScore as string) | 0} points</Text>

            </View>

            <View className='justify-center items-center bottom-20'>

                <CustomButton
                    title='Claim'
                    onPress={() => {
                        setPoint((prev) => {
                            if (prev) {
                                return prev += parseInt(prevScore as string) | 0;
                            } else {
                                return parseInt(prevScore as string) | 0;
                            }
                        });
                        router.push('/(menu)/menu');
                    }}
                />
            </View>
        </View>
    );
};

export default pointScreen;