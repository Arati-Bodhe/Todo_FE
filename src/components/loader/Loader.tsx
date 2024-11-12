import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { color } from "../../constants/color";
import { actuatedNormalize } from "../../dimension/PixelScaling";

export const Loader = (props) => {
    return (
        <View style={styles.container}>
        {props.children}
        {props.isLoading && (
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType="light" 
                blurAmount={2}   
                reducedTransparencyFallbackColor="white"
            >
                <View style={styles.loaderContainer}>
                     <Text style={styles.text}>Loading...</Text>
                </View>
            </BlurView>
        )}
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    loaderContainer: {
        flex: 1,
         justifyContent: "center",
         alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Adds a slight overlay over the blur effect
    },
    text:{
        color:color.ERROR,
        fontSize:actuatedNormalize(30),
        textAlign:'center',
        textAlignVertical:'center'
    }
});