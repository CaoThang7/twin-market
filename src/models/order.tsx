import { CartItemProps } from "./cart";

export interface OrderItemProps {
    userId: string
    orderId: string
    shipping: Object
    payment: Object
    cartItem: CartItemProps
    address: string
    dateOrder: Date
    totalPrice: number
    status: string
};