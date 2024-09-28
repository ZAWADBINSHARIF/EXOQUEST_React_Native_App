import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';


const characterPick = () => {

    const [name, setName] = useState("");

    const pickCharacter = () => {
        if (!name) {

            return;
        }
    };

    return (
        <View
            className='flex-1 w-full h-full'
        >
            <BackButton />

            <Image
                source={imgs.exterior_galaxy}
                className='h-full w-full absolute'
            />


            <View
                className='absolute left-36 top-10 w-7/12 bg-[#79FFC680] rounded-3xl border-white border-4 justify-center gap-1 py-5'
            >

                <View className='items-center space-y-2'>
                    <View className='flex-row space-x-2'>
                        <Text className='text-white/80 font-[SpaceMono]'>Enter your name: </Text>
                        <View className='shadow-lg'>
                            <TextInput className='bg-white w-32 rounded-lg px-2 font-[SpaceMono ]'
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                    </View>
                    <Text
                        className='font-[SpicyRice] tracking-widest text-2xl text-white uppercase'
                    >
                        PICK  A  CHARACTER
                    </Text>
                </View>

                <View
                    className='flex-row justify-center gap-5'
                >

                    <TouchableOpacity>
                        <Image
                            source={imgs.boy_frame}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={imgs.girl_frame}
                        />
                    </TouchableOpacity>

                </View>

            </View>


            <Image
                source={imgs.planet_01}
                className='absolute bottom-20 right-0'
            />

        </View>
    );
};

export default characterPick;