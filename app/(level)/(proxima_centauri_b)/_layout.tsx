import { Stack } from 'expo-router';
import React from 'react';

export default function layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='dialogue_01' options={{ animation: 'fade_from_bottom' }} />
            <Stack.Screen name='quiz' />
        </Stack>
    );
}
