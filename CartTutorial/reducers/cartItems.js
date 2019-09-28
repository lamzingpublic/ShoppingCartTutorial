const cartItems = (state = {cartData:[]}, action) => {
    switch (action.type) {
        case 'ADD_CART':
            if(state.cartData.find(item => item.id === action.payload.id)){
              
               return { cartData: state.cartData.filter(cartData =>
                    cartData.id !== action.payload.id
                )}
               }
               else{
                  return Object.assign({}, state, {
                    cartData: [
                            ...state.cartData,
                            action.payload
                        ]
                    })
               }
        case 'REMOVE_CART':
                return { cartData: state.cartData.filter(cartData =>
                cartData.id !== action.payload.id
            )}
        case 'CLEAR_CART':
            return { cartData: []}
    }

    return state
}

export default cartItems