import React from "react";
import { 
    Text,
    StyleSheet
} from "react-native";

const DefaultText = (props: any) => {
    const {children, style, onPress} = props;
    return(
        <Text style={[styles.font, styles.defaultText, style]} onPress={onPress}>
            {children}
        </Text>
    )
} 

const styles = StyleSheet.create({
    font: {
        fontFamily: 'calibri',
    },
    defaultText: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DefaultText;