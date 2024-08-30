import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
    render() {
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
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
                <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />




            </ScrollView>
        )
    }
}

export default Categories