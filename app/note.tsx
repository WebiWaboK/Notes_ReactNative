import React from "react";
import { View, StyleSheet } from "react-native";
import CreateNotes from "../screens/createNotes";

export default function CreateNotesRoute() {
    return (
        <View style={styles.container}>
            <CreateNotes/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});