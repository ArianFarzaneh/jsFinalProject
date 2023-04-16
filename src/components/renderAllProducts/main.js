export const renderProductsContainer=document.getElementById('render-products-container')
export async function getAllProductsData(url = 'http://localhost:3000/products'){
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        console.log(data);
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}