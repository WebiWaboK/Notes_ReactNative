//createNotes.tsx
import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

export default function CreateNotes() {

    const [title, setTitle] = useState <string> (""); //Declaramos el estado para que se guarde el titulo

    const [note, setNote] = useState <string> (""); //Declaramos el estado para que se actualice el contenido de la nota

    //Declaramos para que se guarden ambos estados en uno mismo
    const [saveData, setSaveData] = useState<{title: string, note: string} | null > (null);

    const handleChange = (name: "title" | "note", value: string) => {
        if (name == "title") {
            setTitle(value);
        } else {
            setNote(value);
        }
    }

    const handleSave = () => {
        setSaveData({title, note});
    }

    const debuggerData = () => {
        console.log(saveData);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Titulo"
                value = {title}
                onChangeText={(text) => handleChange("title", text)}
            />
            <TextInput style={styles.input}
                placeholder="Nota: "
                multiline
                value = {note}
                onChangeText={(text) => handleChange("note", text)}
            />
            <Link href={{pathname: '/', params: {title, note}}}>
                <TouchableOpacity style = {styles.button} onPress={handleSave}>
                    <Text style = {styles.textButton}>Guardar Nota</Text>
                </TouchableOpacity>        
            </Link>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#110022',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,

    },

    input: {
        backgroundColor: "#CCC",
        margin : 12,
        padding: 12,
    },

    button: {
        backgroundColor: '#AAAAAA'
    },

    textButton: {
        color: '#FFF'
    }
})