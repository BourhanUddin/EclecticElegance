import { getStoredCart } from "../Utilities/fakeDB"

export const productAndCartData = async()=>{
    const productsData = await fetch ('products.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    let cartArr = []

    for (const id in savedCart){
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct){
            foundProduct.quantity = savedCart[id]
            cartArr.push(foundProduct)
            // console.log(foundProduct);
            
        }
    }
    return {cartArr, products}
    
}

// export default productAndCartData