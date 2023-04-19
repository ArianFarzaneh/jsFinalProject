export const renderProductsContainer=document.getElementById('render-products-container')
export const brandsMenuContainer = document.getElementById('brands-menu-container')
export const brandsInput = document.getElementById('brands-input')
export async function getAllProductsData(url = 'http://localhost:3000/products'){
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderAllProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}

function renderAllProducts(data)
{
    renderProductsContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="font-bold h-[15%] text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            renderProductsContainer.insertAdjacentHTML('beforeend',card)
    })
    
}

export async function renderBrandInMainPage(url,target){
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderUniqeBrand(data,target)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}

function renderUniqeBrand(data)
{
    renderProductsContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="font-bold h-[15%] text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            renderProductsContainer.insertAdjacentHTML('beforeend',card)
    })
}

export function renderByInputSearch()
{
    if(brandsInput.value==='')
    {
        getAllProductsData()
    }
    else
    {
        getProductBySearch()
    }
    // data.map(item=>
    // {
    //     const card = `
    //     <div class="w-[100%] h-52" id="${item.id}">
    //                 <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
    //                     <img class="w-52 h-52" src="${item.images}" alt="">
    //                 </div>
    //                 <div class="font-bold h-[15%] text-xl">${item.model}</div>
    //                 <div class="h-[15%]">$ ${item.price}</div>
    //         </div>
    //         `
    //         renderProductsContainer.insertAdjacentHTML('beforeend',card)
    // })
}
async function getProductBySearch()
{
    try {
        const response = await (await fetch(`http://localhost:3000/products?q=${brandsInput.value}`)).json()
        const data = await response;
        renderAllProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}