import React from 'react';
import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='(proxima_centauri_b)' />
        </Stack>
    );
};

export default layout;