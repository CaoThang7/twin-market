import { CartItemProps } from "@models/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createCart, updateCart, deleteCartById } from "@services/cart"

interface CartState {
    cart: CartItemProps[];
}

interface UserCart {
    userId: string;
    cartId: string;
};

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
        incrementQuantity: (state, action: PayloadAction<UserCart>) => {
            const itemInCart = state.cart.find((item) =>
                item.cartId == action.payload.cartId
                && item.userId == action.payload.userId
            );
            if (itemInCart) {
                itemInCart.quantity++;
            }
            state.cart.map((data) => {
                updateCart(data.cartId, data)
            })
        },
        decrementQuantity: (state, action: PayloadAction<UserCart>) => {
            const itemInCart: any = state.cart.find((item) =>
                item.cartId == action.payload.cartId
                && item.userId == action.payload.userId
            );
            if (itemInCart.quantity == 1) {
                const removeFromCart = state.cart.filter((item) => item.cartId !== action.payload.cartId);
                state.cart = removeFromCart;
                deleteCartById(itemInCart.cartId)
            } else {
                itemInCart.quantity--;
                state.cart.map((data) => {
                    updateCart(data.cartId, data)
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<UserCart>) => {
            const removeFromCart = state.cart.filter((item) => item.cartId !== action.payload.cartId);
            state.cart = removeFromCart;
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;