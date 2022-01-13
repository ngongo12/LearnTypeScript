import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    StatusBar,
    Image,
    Text,
    Dimensions,
    Animated,
    ToastAndroid
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderText from '@components/Text/HeaderText';
import TextInputLayout from '@components/TextInputLayout';
import { GradientButton, StrokeButton } from '@components/Button';
import { LoadingModal } from '@components/Modal';
import images from '@res/images';
import actions from '@redux/actions';

const { height } = Dimensions.get('window');

const RegisterScreen = (props: any) => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.UserReducer);
    const {user} = data;
    console.log(user)
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const isFocused = useIsFocused();
    const value = new Animated.Value(0);
    const onRegister = () => {
        //gọi action khi user click vào nút đăng nhập
        if (validate()) {
            const user = {
                phone,
                password,
                fullname
            }
            dispatch({type: actions.REGISTER, payload: {user}})
        }

    }
    const validate = () => {
        if (phone.trim().length < 10) {
            ToastAndroid.show('Số điện thoại không hợp lệ', ToastAndroid.SHORT);
            return false;
        }
        if(fullname.trim().length == 0){
            ToastAndroid.show('Tên không được rỗng', ToastAndroid.SHORT);
            return false;
        }
        if (password.trim().length < 6) {
            ToastAndroid.show('Mật khẩu ít nhất 6 ký tự', ToastAndroid.SHORT);
            return false;
        }

        return true;
    }
    //console.log(user);

    useEffect(() => {
        
    }, [isFocused])

    

    useEffect(() => {
        Animated.timing(value, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();

    }, [isFocused])
    const translateY = value.interpolate({
        inputRange: [0, 1],
        outputRange: [height, 0]
    })

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <LinearGradient
                locations={[0, 1.0]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1, y: 1.0 }}
                colors={['#7BE495', '#529D9C']}
                style={styles.container}>
                <Image source={images.background_login} style={styles.image} />
                <Animated.View style={[styles.content, { transform: [{ ...{ translateY } }] }]}>
                    <HeaderText>ĐĂNG KÝ</HeaderText>
                    <TextInputLayout
                        placeholder='Số điện thoại'
                        maxLength={11}
                        autoCapitalize='none'
                        value={phone}
                        onChangeText={setPhone}
                        name='mobile1'
                        keyboardType='phone-pad'
                    />
                    <TextInputLayout
                        placeholder='Họ tên'
                        autoCapitalize='words'
                        value={ fullname }
                        onChangeText = { setFullname }
                        name='user'
                    />
                    <TextInputLayout
                        placeholder='Mật khẩu'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={setPassword}
                        name='lock'
                    />
                    <GradientButton onPress={onRegister} >Đăng Ký</GradientButton>

                </Animated.View>
                {isFocused && (<LoadingModal
                    visible={false}
                    animationType='fade'
                    transparent={true}
                    statusBarTranslucent={true}
                    message='Đăng đăng nhập. Xin chờ'
                />)}
            </LinearGradient>

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        width: '100%',
        padding: 32,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    image: {
        width: 300,
        height: 250,
        resizeMode: 'cover',
        alignSelf: 'center',
        position: 'absolute',
        top: 150
    },
    text: {
        marginTop: 16,
        textAlign: 'right',
        paddingRight: 16
    },

})

export default RegisterScreen;
