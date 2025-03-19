import React from "react";
import { View, StyleSheet } from "react-native";
import App from "../screens/home";

export default function Index() {
    return(
        <View style={styles.content}>
            <App/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    }
})