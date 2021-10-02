import { useCart } from "react-use-cart";
import { Button } from "antd";

export default function Cart() {
  const {
    emptyCart,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <>
      <Button onClick={emptyCart()}>Clean up</Button>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {result.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}
