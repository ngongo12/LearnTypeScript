import React from "react";
import { 
    Text,
    StyleSheet
} from "react-native";
import colors from "@res/colors";

const HeaderText = (props: any) => {
    const {children, style, onPress} = props;
    return(
        <Text style={[styles.font, styles.HeaderText, style]} onPress={onPress}>
            {children}
        </Text>
    )
} 

const styles = StyleSheet.create({
    font: {
        fontFamily: 'calibri',
    },
    HeaderText: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.DARK_GREEN
    }
})

export default HeaderText;