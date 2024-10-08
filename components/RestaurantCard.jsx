import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {

    return (
        <TouchableOpacity
            onPress={() =>
                router.push({
                    pathname: "/restaurant/[id]",
                    params: {
                        id: id,
                        title: title,
                        imgUrl: imgUrl,
                        rating: rating,
                        genre: genre,
                        address: address,
                        short_description: short_description,
                        dishes: JSON.stringify(dishes),
                        long: long,
                        lat: lat
                    }
                })
            }
            className="bg-white mr-3 w-64 shadow-sm">
            <Image
                source={{
                    uri: `http://127.0.0.1:8000/${imgUrl}`
                }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2" >{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={"green"} opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-gray-400">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color={"gray"} opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-gray-400">Nearby</Text> . {address}
                    </Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default RestaurantCard