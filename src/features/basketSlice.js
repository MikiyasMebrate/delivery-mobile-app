import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            state.items = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions


export const selectBasketItemsWithId = (state, id) => {
    return state.basket.items.filter((item) => item.id === id)
}


export default basketSlice.reducer