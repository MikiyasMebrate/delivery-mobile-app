import { Stack } from "expo-router";


// import { store } from '../src/app/store'
// import { Provider } from 'react-redux'


const RootLayout = () => {
    return (
        // <Provider store={store}>

        // </Provider>

        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="restaurant/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}

export default RootLayout;