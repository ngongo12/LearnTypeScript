import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Pressable,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '@res/colors';
const StrokeButton = (props: any) => {
    const { children, style } = props;
    return (
        <TouchableOpacity {...props} style={[styles.container, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        borderColor: colors.DARK_GREEN,
        borderWidth: 2
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.DARK_GREEN,
        padding: 14,

    }
})

export default StrokeButton