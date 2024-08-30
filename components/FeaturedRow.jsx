import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import useFetch from '../Hooks/useFetch'

const FeaturedRow = ({ id, title, description }) => {
    const [featuredRestaurantData, isPending, error] = useFetch(`http://127.0.0.1:8000/featured/?feature=${id}`)

    return (
        <View className="px-4">
            <View className="flex-row mt-4 items-center justify-between ">
                <Text className=" font-bold text-lg" >{title}</Text>
                <ArrowRightIcon color={"#00CCBB"} />
            </View>
            <Text className="text-xs text-gray-500 mb-4" >{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 0
                }}
            >

                {/*Restaurant Card*/}
                {featuredRestaurantData?.restaurant?.map((rest) => (
                    <RestaurantCard
                        key={rest.restaurant__id}
                        id={rest.restaurant__id}
                        imgUrl={rest.restaurant__image}
                        title={rest.restaurant__name}
                        rating={rest.restaurant__rating}
                        genre="ethiopian"
                        address={rest.restaurant__address}
                        short_description={rest.restaurant__short_description}
                        dishes={[]}
                        long={rest.restaurant__long}
                        lat={rest.restaurant__lat}
                    />
                ))}


            </ScrollView>
        </View>
    )
}

export default FeaturedRow