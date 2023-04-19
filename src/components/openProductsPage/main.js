import { renderProductsContainer } from "../renderAllProducts/main";
const productsPage=document.getElementById('products-page')
const homePageMenu=document.getElementById('home-page-menu')
export function openProductFunc(target)
{
    if(target.classList[0]==='w-52')
      {
        target=target.closest('.rounded-3xl').closest('.h-52')
      }
      else if(target.classList[0]==='font-bold')
      {
        target=target.closest('.h-52')
      }
      else if(target.classList[0]==='h-[15%]')
      {
        target=target.closest('.h-52')
      }
      getProductForRender(target)
    
}




async function getProductForRender(target)
{
    try {
        const response = await (await fetch(`http://localhost:3000/products/?model=${target.id}`)).json()
        const data = await response;
        renderProductPageFunction(target,data[0])
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}




function renderProductPageFunction(target,data)
{
    let quantityOfproduct=1
    let finalPrice = data.price
    const priceTemp = target.children[2].innerHTML//300$
    // const imgUrlTemp=target.children[0].children[0].getAttribute('src')
      const productPage =`
      <div class="product-page-container w-12/12 h-[100vh]">
        <div class="product-img w-12/12 h-[40vh] bg-[#f3f3f3]"><img class="w-full " src="${data.images}" alt=""></div>
        <a href="/products" onclick="route()"><div class="absolute top-[3%] left-[5%] text-3xl"><ion-icon name="arrow-undo"></ion-icon></div></a>
        <div class="productModel font-bold text-3xl p-[3%]">${data.model}</div>
        <div class="flex pl-[3%] pt-[1%]">
            <div class="mr-[5%] bg bg-[#f3f3f3] p-[2%] rounded-xl font-semibold">5371 sold</div>
            <div class="flex p-[2%]">
            <div class="text-xl"><ion-icon name="star-half"></ion-icon></div>
            <div class="">4.3(5389 review)</div>
            </div>
        </div>
        <div class="products-description-section p-[3%]">
            <div class="description-title font-bold text-xl">Description</div>
            <div class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque ipsa quidem est ipsum vitae consequatur.  </div>
        </div>

        <div class="product-order-section flex pl-[3%] w-[100%]">

            <div class="produc-size-section w-[35%]">
            <div class="font-bold text-2xl">size</div>
            <div class="flex gap-[3%]">
                <div class="border-black border-2 rounded-full p-[6%] text-md font-semibold">40</div>
                <div class="border-black border-2 rounded-full p-[6%] text-md font-semibold">41</div>
                <div class="border-black border-2 rounded-full p-[6%] text-md font-semibold">42</div>
            </div>
            </div>

            <div class="product-color-section w-[65%] pl-[5%]">
            <div class="font-bold text-2xl">colors</div>
            <div class="flex text-white font-semibold">
                <div class="border-black border-[1px] rounded-full bg-gray-500 p-[5%] w-10 h-10 mr-[3%]"></div>
                <div class="border-black border-[1px] rounded-full bg-red-600 p-[5%] w-10 h-10 mr-[3%]"></div>
                <div class="border-black border-[1px] rounded-full bg-blue-400 p-[5%] w-10 h-10 mr-[3%]"></div>
            </div>     
            </div>
            
        </div>


        <div class="product-quantity flex w-full p-[3%]">
            <div class="font-bold text-2xl mr-[5%]">quantity</div>
            <div class="bg-gray-200 rounded-full flex justify-evenly w-[30%]">
            <div class="text-3xl font-bold mr-[5%]"><button id="remove-product">-</button></div>
            <div class="text-2xl font-bold mr-[5%]" id="product-qnt">${quantityOfproduct}</div>
            <div class="text-3xl font-bold"><button id="add-product">+</button></div>
            </div>
        </div>


        <div class="flex register-order-section w-full">
            <div class="w-[30%]">
            <div class="">total price</div>
            <div class="font-bold text-2xl" id="product-final-price">$ ${Number(data.price)*quantityOfproduct}</div>
            </div>
            <div class="w-[70%]">
            <button class="w-[90%] rounded-full bg-black text-white font-bold text-xl p-[4%]" id="add-to-card">Add to Card</button>
            </div>
        </div>
        </div>
      `
      homePageMenu.remove()
      productsPage.classList.remove('products-container')
      productsPage.classList.remove('p-3')
      productsPage.classList.remove('w-12/12')
      productsPage.classList.remove('h-[5100px]')
      productsPage.innerHTML=''
      productsPage.insertAdjacentHTML('beforeend',productPage)
      const productQnt=document.getElementById('product-qnt')
      const productFinalPrice=document.getElementById('product-final-price')
      const addProduct=document.getElementById('add-product')      
      const removeProduct=document.getElementById('remove-product')
      const addToCard=document.getElementById('add-to-card')
      addProduct.addEventListener('click',()=>
      {
        quantityOfproduct=quantityOfproduct+1
        productQnt.innerHTML=quantityOfproduct
        productFinalPrice.innerHTML=`$ ${quantityOfproduct*data.price}`
        finalPrice=quantityOfproduct*data.price
      })
      removeProduct.addEventListener('click',()=>
      {
        if(quantityOfproduct>1)
        {
            quantityOfproduct=quantityOfproduct-1
            productQnt.innerHTML=quantityOfproduct
            productFinalPrice.innerHTML=`$ ${quantityOfproduct*data.price}`
            finalPrice=quantityOfproduct*data.price
        }
      })
      addToCard.addEventListener('click',()=>
      {
        GetProductForUpdate(data.model,data.price,data.images,quantityOfproduct,finalPrice)
      })
}
async function GetProductForUpdate(model,price,image,qnt,finalPrice)
{
    const user=localStorage.getItem('customerName')
    try {
        const response = await (await fetch(`http://localhost:3000/acounts/${user}`)).json()
        const userinfo = await response;
        addItemToCard(userinfo,model,price,image,qnt,finalPrice)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}
function addItemToCard(data,model,price,image,qnt,finalPrice)
{
    const newCardItem={
        "model":model,
        "image":image,
        "price":price,
        "totalprice":String(finalPrice),
        "count":String(qnt)
      }
      data.cardItems.push(newCardItem)
      updateDatabaseCardItems(data)
}
async function updateDatabaseCardItems(data)
{
    const user=localStorage.getItem('customerName')
    try {
        fetch(`http://localhost:3000/acounts/${user}`,{
        method: 'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}