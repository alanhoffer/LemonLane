import type { TProduct } from "@/modules/interfaces/TProduct";

export default function prettierProduct(Products: TProduct[]) {
    return Products.map((product:TProduct) => {
        const { id, name, price, description } = product;
        return { id, name, price, description };
    });
}