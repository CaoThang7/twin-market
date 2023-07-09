import { CartItemProps } from "./cart";

export interface OrderItemProps {
    userId: string
    orderId: string
    shipping: number
    payment: string
    cartItem: [CartItemProps]
    address: string
    dateOrder: Date
    totalPrice: number
    status: string
};