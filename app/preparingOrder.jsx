import { router } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"

const PreparingOrder = () => {
    useEffect(() => {
        setTimeout(() => {
            router.push("delivery")
        }, 3000)
    }, [])
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/orderLoading.gif")}
                animation={"slideInUp"}
                iterationCount={1}
                className="h-96 w-96"
            />

            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    );
}

export default PreparingOrder;