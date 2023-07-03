import { createCart } from "@services/cart"
import { CartItemProps } from "@models/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
    cart: CartItemProps[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemProps>) => {
            const itemInCart = state.cart.find((item) =>
                item.products.uid == action.payload.products.uid
                && item.userId == action.payload.userId
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
            state.cart.map((data) => {
                createCart(data)
            })
        },
        removeFromCart: (state, action: PayloadAction<CartItemProps>) => {
            const removeFromCart = state.cart.filter((item) => item.cartId !== action.payload.cartId);
            state.cart = removeFromCart;
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;