import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


interface Props {
    text: React.ReactNode,
    arrowDireaction: 'left' | 'right';
}

const DialogueBubbleView = (props: Props) => {
    return (
        <View style={styles.speechBubble}>
            {props.text}

            {props.arrowDireaction === 'left' &&
                <View style={styles.leftArrow}></View>
            }
            {props.arrowDireaction === 'right' &&
                <View style={styles.rightArrow}></View>
            }

        </View>
    );
};

export default DialogueBubbleView;

const styles = StyleSheet.create({
    speechBubble: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        minWidth: 60,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    speechText: {
        color: 'black',
        fontFamily: 'SpaceMono',
        // fontWeight: 'bold'
    },
    leftArrow: {
        position: "absolute",
        backgroundColor: "white",
        width: 30,
        height: 35,
        borderBottomRightRadius: 50,
        left: 0,
        bottom: -25,
        // zIndex: -1
    },
    rightArrow: {
        position: "absolute",
        backgroundColor: "white",
        width: 30,
        height: 35,
        borderBottomLeftRadius: 50,
        right: 0,
        bottom: -25,
        // zIndex: -1
    }
});