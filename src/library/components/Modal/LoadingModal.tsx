import React from 'react';
import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native';
import { DefaultText } from '../Text';

const LoadingModal = (props: any) => {
    const { message } = props;
    return (
        <Modal 
            style={styles.container}
            {...props}
            >
            <View style={styles.modalView}>
                <View style={styles.content}>
                    <ActivityIndicator color='grey' size='small' />
                    <DefaultText style={styles.text}>{message ? message : 'Loading'} ...</DefaultText>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        margin: 20,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        paddingHorizontal: 16
    }
})

export default LoadingModal
