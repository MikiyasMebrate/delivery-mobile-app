import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="restaurant/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}

export default RootLayout;