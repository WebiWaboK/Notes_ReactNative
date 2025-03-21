import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ButtonCreate() {
    return (
        <View>
            <Link href='/createNotes'>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Crear notas</Text>
                </TouchableOpacity>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AAAAAA'
    },

    textButton: {
        color: '#FFF'
    }
})