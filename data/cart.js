 export const cart = [];
          
export function addToCart (productsId){

let MatchingItem;

  cart.forEach((cartItem) => {
      if (productsId === cartItem.productsId){
        MatchingItem = cartItem;
      }
    });

    if(MatchingItem){
      MatchingItem.quantity += 1;
    } else{
        cart.push({
      productsId: productsId,
      quantity: 1
    });
  }

}
