
import { useSelector } from "react-redux"

import { router } from 'expo-router'

import { selectBasketTotal } from "../src/features/basketSlice"
import { Text, TouchableOpacity, View } from "react-native"

const BasketIcon = () => {
    const items = useSelector((state) => state.basket.items)
    const basketTotal = useSelector(selectBasketTotal)
    if (items.length === 0) return null
    return (
        <View className="absolute  bottom-10 w-full z-50">
            <TouchableOpacity onPress={() => router.push("/basket")} className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">${Math.round(basketTotal * 100) / 100}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon