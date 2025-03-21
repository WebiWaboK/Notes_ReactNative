import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"Inicio"}} />
            <Stack.Screen name="note" options={{title:"Crear una nueva nota!!!"}} />
        </Stack>
    )
}