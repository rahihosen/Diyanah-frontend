export const cart = {
    state: {
      count: 0,
      cart: []
    },
    actions: {
      addToCart: ({
        commit,
        state
      }, product) => {
        let found = state.cart.some((el) => {
          return el.product_name === product.product_name
        });
        if (!found) {
          commit('ADD_TO_CART', product)
        } else {
          commit('UPDATE_CART', product)
        }
      }
      

    },
    mutations: {
      ADD_TO_CART(state, product){
        // state.cart.push(product)
        product.isDeleting = false;
        product = { ...product,
				quantity: 1
			}
			state.cart = [...state.cart, product];
      },
      UPDATE_CART(state, product){
        let findIndex = state.cart.findIndex(x => x.product_name == product.product_name);
        state.cart[findIndex].quantity++;
      },
      CHANGE_QTY (state, payload) {
        //console.log(payload)
        state.cart[payload.index].quantity =  payload.qty;
      },
      increment (state, index) {
        state.cart[index].quantity++;
        //console.log(findIndex);
      },
      decrement (state, index) {
        if (state.cart[index].quantity == 1) {
					state.cart[index].quantity = 1;
				} else {
					state.cart[index].quantity--;
				}
      },
      REMOVE_CART (state, index) {
         state.cart.splice(index, 1);
        // console.log(index);
      }
      
    },

    getters: {
      counterValue: function (state) {
        return state.count;
      },
      getCartProducts: function (state) {
        return state.cart;
      },
      cartCount: state => {
        if (state.cart.length === 0) {
          return '0'
        } else {
          return state.cart.reduce((a, b) => a + b.quantity, 0);
        }
      },
      cartTotal: state => {
        if (state.cart.length === 0) {
          return '0'
        }else{
          return (state.cart.reduce((a, b) => a + (b.product_price * b.quantity), 0)).toFixed(2);
        }
        
      },
      
      itemTotal: (state) => (index) => {
        if (state.cart[index]) {
          return (state.cart[index].product_price * state.cart[index].quantity);
        }
      }
     
    }
};
