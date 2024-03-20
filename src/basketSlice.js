import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { burger } = action.payload; // destructure burger object from payload

      const product = state.cart.find((item) => item.id === burger.id)

      if (product) {
        product.quantity++
      } else {
        state.cart.push({ ...burger, quantity: 1 })
      }
    },
      removeFromCart: (state, action) => {
        const { id } = action.payload
  
        const product = state.cart.find((item) => item.id === id);
  
        if (product) {
          if (product.quantity > 1) {
            product.quantity--
          } else {
            state.cart = state.cart.filter((item) => item.id !== id)
          }
        }
      },
    },
  })

export const { addToCart, removeFromCart } = basketSlice.actions

export default basketSlice.reducer