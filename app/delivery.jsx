import { router, useNavigation } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress"
import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {
    const restaurant = useSelector((state) => state.restaurant.restaurant)
    const navigator = useNavigation()
    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between p-5 items-center">
                    <TouchableOpacity onPress={() => navigator.navigate("index")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <View>
                        <Text className="text-white text-lg font-light ">Help Order</Text>
                    </View>
                </View>

                <View className="bg-white mx-5 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimate Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls"
                            }}
                            className="h-20 w-20 rounded-md"
                        />
                    </View>
                    <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className="flex-1 z-0 -m-10"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />

            </MapView>

            <SafeAreaView className="bg-white flex-row justify-center items-center space-x-5 h-28">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 mt-10"
                />
                <View className="flex-1">
                    <Text className="text-lg">Abel Berhe</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    );
}

export default Delivery;