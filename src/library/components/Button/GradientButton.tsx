import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ( props: any ) => {
    const  { children, style } = props;
    return (
        <TouchableOpacity {...props} style={style}>
            <LinearGradient
                locations={[0, 1.0]}
                start={{ x: 1.0, y: 1.0 }}
                end={{ x: 0, y: 0 }}
                colors={['#7BE495', '#529D9C']}
                style={styles.container}
            >
                <Text style={styles.text}>{children}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        color: '#fff',
        padding: 14,
        
    }
})

export default GradientButton