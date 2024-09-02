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
            const index = state.items.findIndex((item) => item.id === action.payload.id)

            if (index > -1) {
                state.items.splice(index, 1)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions


export const selectBasketItemsWithId = (state, id) => {
    return state.basket.items.filter((item) => item.id === id)
}

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)
export default basketSlice.reducer