// import React, { createContext, useState, ReactNode } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Omit<Product, "quantity">) => void;
//   updateCartItem: (productId: number, quantity: number) => void;
//   removeFromCart: (productId: number) => void;
// }

// export const CartContext = createContext<CartContextType | undefined>(
//   undefined
// );

// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Omit<Product, "quantity">) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const updateCartItem = (productId: number, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   const removeFromCart = (productId: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, updateCartItem, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number; // Change this to a number type for easier calculations
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  updateCartItem: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  getTotalQuantity: () => number;
  getTotalAmount: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Omit<Product, "quantity">) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartItem = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItem,
        removeFromCart,
        getTotalQuantity,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
