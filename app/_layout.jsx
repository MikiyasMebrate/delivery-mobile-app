import { Stack } from "expo-router";


import { store } from '../src/redux/store'
import { Provider } from 'react-redux'


const RootLayout = () => {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen name="basket" options={{
                    headerShown: false,
                    presentation: 'modal',
                }} />
                <Stack.Screen name="restaurant/[id]" options={{ headerShown: false }} />
                <Stack.Screen name="preparingOrder"
                    options={{
                        headerShown: false,
                        presentation: "fullScreenModal"
                    }}
                />

            </Stack>
        </Provider>


    );
}

export default RootLayout;