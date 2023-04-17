export const nikePageContainer=document.getElementById('nike-page-container')
export const adidasPageContainer=document.getElementById('adidas-page-container')
export const pumaPageContainer=document.getElementById('puma-page-container')
export const asicsPageContainer=document.getElementById('asics-page-container')
export const newbalancePageContainer=document.getElementById('newbalance-page-container')
export const conversePageContainer=document.getElementById('converse-page-container')
export async function loadnikePage(url='http://localhost:3000/products?brand=nike')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        rendernikeProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function rendernikeProducts(data)
{
    nikePageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            nikePageContainer.insertAdjacentHTML('beforeend',card)
    })
}


export async function loadadidasPage(url='http://localhost:3000/products?brand=adidas')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderadidasProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function renderadidasProducts(data)
{
    adidasPageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            adidasPageContainer.insertAdjacentHTML('beforeend',card)
    })
}
export async function loadpumaPage(url='http://localhost:3000/products?brand=puma')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderpumaProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function renderpumaProducts(data)
{
    pumaPageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            pumaPageContainer.insertAdjacentHTML('beforeend',card)
    })
}
export async function loadasicsPage(url='http://localhost:3000/products?brand=asics')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderasicsProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function renderasicsProducts(data)
{
    asicsPageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            asicsPageContainer.insertAdjacentHTML('beforeend',card)
    })
}
export async function loadconversePage(url='http://localhost:3000/products?brand=converse')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        renderconverseProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function renderconverseProducts(data)
{
    conversePageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            conversePageContainer.insertAdjacentHTML('beforeend',card)
    })
}
export async function loadnewbalancePage(url='http://localhost:3000/products?brand=newbalance')
{
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        rendernewbalanceProducts(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
} 
function rendernewbalanceProducts(data)
{
    newbalancePageContainer.innerHTML=''
    data.map(item=>
    {
        const card = `
        <div class="w-[100%] h-52" id="${item.id}">
                    <div class="h-[70%] bg-[#f2f2f2] rounded-3xl flex flex-col justify-center">
                        <img class="w-52 h-52" src="${item.images}" alt="">
                    </div>
                    <div class="h-[15%] font-bold text-xl">${item.model}</div>
                    <div class="h-[15%]">$ ${item.price}</div>
            </div>
            `
            newbalancePageContainer.insertAdjacentHTML('beforeend',card)
    })
}