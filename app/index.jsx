import { View, Image, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "expo-router"
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon, } from "react-native-heroicons/outline"
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import useFetch from "../Hooks/useFetch"






export default function Page() {
  const navigation = useNavigation()
  const [featuredCategoryData, isPending, error] = useFetch("http://127.0.0.1:8000/featured/")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  return (
    <SafeAreaView className="bg-white pt-5 ">


      {/* Header */}
      <View className="flex-row justify-between px-3">

        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="text-sm text-gray-400 font-bold">Deliver Now!</Text>

            <View className="flex flex-row justify-center items-center ">
              <Text className="text-2xl font-bold">
                Current Location
              </Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>

          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />

      </View>

      {/** Search */}
      <View className="mt-3 items-center flex-row px-3 pb-3 ">
        <View className="bg-gray-200  flex-row space-x-2 flex-1 p-3 " >
          <MagnifyingGlassIcon color="grey" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and Cuisines"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>


      {/** Body */}
      <ScrollView className="bg-gray-100  ">
        {/** Categories */}
        <Categories />


        {/** Featured Rows */}

        {featuredCategoryData?.featured?.map((feature) => (
          <FeaturedRow
            key={feature.id}
            id={feature.id}
            title={feature.name}
            description={feature.short_description}
          />
        ))}




      </ScrollView>

    </SafeAreaView>
  );
}
