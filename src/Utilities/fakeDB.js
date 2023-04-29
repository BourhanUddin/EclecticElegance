// Add data to local Storage
const addToDb = id =>{
    // localStorage.setItem('shopping-cart', id)
    let shoppingCart = {}

    // get previous data from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    //add quantity 
    const quantity = shoppingCart[id]//acces quantity from shopping-card in localstorage
    
    if(quantity){
        const newquantity = quantity + 1 ;
        shoppingCart[id] = newquantity
    }
    else{

        shoppingCart[id] = 1 ;

    }

    //set data in localstorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


//get stored data from cart

const getStoredCart= () =>{
    
    let shoppingCart = {}

    // get previous data from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    return shoppingCart
}

export { addToDb, getStoredCart }

