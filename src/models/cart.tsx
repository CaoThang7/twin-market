import { ProductItemProps } from "./product";

export interface CartItemProps {
    userId: string;
    cartId: string;
    status: string;
    modifiedOn: Date;
    products: ProductItemProps;
    quantity: number;
};