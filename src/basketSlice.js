import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    cart: [],
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const { burger } = action.payload; // destructure burger object from payload
    //   console.log("ACTION PAYLOAD :" + burger)
    //   const product = state.cart.find((item) => item.id === burger.id)
    //   console.log('burger ds basket')
    //   if (product) {
    //     product.quantity++
    //   } else {
    //     state.cart.push({ ...burger, quantity: 1 })
    //     console.log('error de burger');
    //   }

    // },
    addToCart: (state, action) => {
      const { burger } = action.payload; // Déstructurer l'objet burger à partir du payload
    
      console.log("ACTION PAYLOAD :" + burger); // Vérifier le payload de l'action
    
      if (burger && burger.id) { // S'assurer que l'objet burger et sa propriété 'id' sont définis
        const product = state.cart.find((item) => item.id === burger.id);
    
        if (product) {
          product.quantity++; // Augmenter la quantité du produit existant
        } else {
          state.cart.push({ ...burger, quantity: 1 }); // Ajouter un nouveau produit au panier
        }
      } else {
        console.error('Burger invalide : id manquant'); // Gérer l'erreur d'ID manquant
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