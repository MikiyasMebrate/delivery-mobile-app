import { router } from "expo-router"
import { useMemo, useState } from "react"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { XCircleIcon } from "react-native-heroicons/solid"
import { useDispatch, useSelector } from "react-redux"
import { removeFromBasket, selectBasketTotal } from "../src/features/basketSlice"

const BasketScreen = () => {
    const restaurant = useSelector((state) => state.restaurant.restaurant)
    const items = useSelector((state) => state.basket.items)
    const dispatch = useDispatch()
    const basketTotal = useSelector(selectBasketTotal)
    const [groupItemsBasket, setGroupItemsBasket] = useState([])

    useMemo(() => {
        const groupItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {})

        setGroupItemsBasket(groupItems)
    }, [items])


    const removeItemFromBasket = (id) => {
        if (!items.length > 0) return
        dispatch(removeFromBasket({ id }))
    }



    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={router.back}
                        className="rounded-full bg-gray-100 absolute top-5 right-5">
                        <XCircleIcon color={"#00CCBB"} size={50} width={50} />
                    </TouchableOpacity>
                </View>


                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        className="w-7 h-7 bg-gray-300 p-4 rounded-full"
                        source={{
                            uri: 'https://links.papareact.com/wru',

                        }} />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupItemsBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image
                                className="h-12 w-12 rounded-full"
                                source={{
                                    uri: items[0]?.image
                                }} />
                            <Text className="flex-1">{items[0].name}</Text>
                            <Text className="text-gray-500">
                                ${Math.round(items[0].price * 100) / 100}
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    className="text-[#00CCBB] text-xs"
                                    onPress={() => removeItemFromBasket(items[0].id)}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">${Math.round(basketTotal * 100) / 100}</Text>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">${5.99}</Text>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <Text >Order Total</Text>
                        <Text className="font-extrabold">${Math.round((basketTotal + 5.99) * 100) / 100}</Text>
                    </View>

                    <TouchableOpacity onPress={() => router.push("/preparingOrder")} className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen