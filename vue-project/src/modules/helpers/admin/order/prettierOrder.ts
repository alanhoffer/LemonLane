export default function prettierOrder(Orders: []){
    return Orders.map((orden) => {
        const { id, status, giftcard, date } = orden;
        return { id, status, giftcard, date };
    });
}