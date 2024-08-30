import { View, Text, Image, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{
                    uri: `http://127.0.0.1:8000/media/${imgUrl}`
                }}
                className="h-20 w-20 rounded bg-black"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold" >{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;