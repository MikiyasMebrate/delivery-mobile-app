import { router, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from "react-native-heroicons/solid";
import DishRow from "../../components/DishRow";
import BasketIcon from "../../components/BasketIcon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../src/features/resturantSlice";


const Restaurant = () => {
    const dispatch = useDispatch()
    const {
        id,
        title,
        imgUrl,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } = useLocalSearchParams()

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            title,
            imgUrl,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }))
    }, [])





    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image
                        className="w-full h-56 bg-gray-300 p-4"
                        source={{
                            uri: `http://127.0.0.1:8000/${imgUrl}`
                        }} />
                    <TouchableOpacity
                        onPress={() => router.push("/")}
                        className="absolute top-14 left-4 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={20} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="mx-4">
                        <View className="pt-4 mb-2">
                            <Text className="text-3xl font-bold" >{title}</Text>
                        </View>

                        <View className="flex-row space-x-2 ">
                            <View className="flex-row items-center space-x-1 ">
                                <StarIcon color={"green"} opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-400">{rating}</Text> . Offers
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1 ">
                                <MapPinIcon color={"grey"} opacity={0.4} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-400">{address}</Text>
                                </Text>
                            </View>
                        </View>

                        <Text className="text-gray-500 mt-4 pb-4" >{short_description}</Text>

                        <TouchableOpacity className="flex-row  items-center space-x-2 p-4 border-y border-gray-300" >
                            <QuestionMarkCircleIcon size={20} color={"gray"} opacity={0.6} />
                            <Text className="flex-1 font-bold text-base" >Have a food allergy</Text>
                            <ChevronRightIcon size={20} color={"#00CCBB"} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pb-3 pt-3 text-xl font-bold">
                        Menu
                    </Text>

                    {/*Dishes*/}
                    {JSON.parse(dishes)?.map((dish) => (
                        <DishRow
                            id={dish.id}
                            key={dish.id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}

                    {/*Dishes*/}
                </View>


            </ScrollView>
        </>
    );
}

export default Restaurant;