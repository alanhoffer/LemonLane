import type { TProduct } from "@/modules/interfaces/TProduct";

export default function prettierProduct(Products: TProduct[]) {
    return Products.map((product:TProduct) => {
        const { id, name, imagen, price, description } = product;
        return { id, name, imagen, price, description };
    });
}