import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'
import useFetch from '../Hooks/useFetch'

const Categories = () => {
    const [categoryData, isPending, error] = useFetch("http://127.0.0.1:8000/category/")


    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >

            {/*Category Card*/}
            {categoryData?.categories?.map((cat) => (
                <CategoryCard
                    key={cat.id}
                    imgUrl={cat.image}
                    title={cat.name}
                />
            ))}





        </ScrollView>
    )
}

export default Categories