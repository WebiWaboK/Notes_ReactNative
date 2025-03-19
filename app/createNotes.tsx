import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CreateNotes() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Titulo"/>
            <TextInput style={styles.input} placeholder="Nota: " multiline/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#110022',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        backgroundColor: "#CCC",
        padding: 12
    }
})