import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

// import { useSelector, useDispatch } from 'react-redux'
// import { addToBasket } from '../features/basketSlice'


const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false)

  // const basket = useSelector((state) => state.basket.items)
  // const dispatch = useDispatch()

  const addItemToBasket = () => {
    // dispatch(addToBasket({ id, name, description, price, image }))
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border ${isPressed && "border-b-0"} p-2 border-gray-200`}>
        <View className="flex-row justify-between">
          <View >
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}</Text>
          </View>
          <View>
            <Image

              source={{
                uri: `${image}`
              }}
              className="w-20 h-20 p-4 bg-gray-300"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 pt-3">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text>{basket.length}</Text>
            <TouchableOpacity >
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>

          </View>
        </View>
      )}
    </>
  )
}

export default DishRow