import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    totalPrica: 0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            state.totalPrica = state.items.reduce((sum, obj)=> {
                return obj.price + sum;
            }, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearItem(state) {
            state.items = [];
        },
    },
});

export const {
    addItem,
    removeItem,
    clearItem
} = cartSlice.actions;

export default cartSlice.reducer;