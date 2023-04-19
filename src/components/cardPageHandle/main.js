const cartItemsContainer=document.getElementById('cart-items-container')
const checkoutModal=document.getElementById('checkout-modal')
const cardItemPage=document.getElementById('card-item-page')
const checkoutDownSection = document.getElementById('checkout-down-section')
export const modalBtn = document.getElementById('modal-btn')
export function renderCardPage()
{
    // cartItemsContainer.innerHTML=""
    const user=localStorage.getItem("customerName")
    getCardItems(user)
}
async function getCardItems(user)
{
    try {
        const response = await (await fetch(`http://localhost:3000/acounts/${user}`)).json()
        const data = await response;
        renderItemsInCard(data)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}

function renderItemsInCard(data)
{
    console.log(data.cardItems);
    data.cardItems.map(item=>
        {
            const card=`
            <div class="card-example bg-white h-[150px] rounded-3xl p-3 flex mb-[3%]" id="${item.model} ${item.price}">
            <div class="w-[35%] bg-[#f3f3f3] flex flex-col justify-center"><img src="${item.image}" alt=""></div>
            <div class="w-[65%] pl-[3%]">
                <div class="titleAndDelete flex">
                    <div class="text-lg font-bold w-[80%]">${item.model}</div>
                    <div class="w-[20%] flex flex-col justify-center"><ion-icon class="w-full h-[20px]" name="trash-outline"></ion-icon></div>
                </div>
                <div class="shoeInfo flex mb-[8%]">
                    <div class="flex flex-col justify-center mr-[10%]"><div class="w-[15px] h-[15px] bg-black rounded-full"></div></div>
                    <div class="">black | size=42</div>
                </div>
                <div class="flex">
                    <div class="cartPriceSection text-2xl font-bold mr-[15%]">$${item.totalprice}</div>
                    <div class="w-[60%]">
                        <div class="bg-gray-200 rounded-full flex justify-evenly w-[100%]">
                            <div class="text-3xl font-bold mr-[5%]" id="minus-in-card-section"><button>-</button></div>
                            <div class="text-2xl font-bold mr-[5%]" id="counter-in-card-section">${item.count}</div>
                            <div class="text-3xl font-bold" id="plus-in-card-section"><button>+</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            cartItemsContainer.insertAdjacentHTML('beforeend',card)
        })
        calculateFinalPRice()
        cartItemsContainer.addEventListener('click',(e)=>
        {
            let target=e.target
            const cardTag=target.closest('.card-example')
            let unitPrice= Number(cardTag.getAttribute('id').split(" ")[1]) 
            let currentPrice=cardTag.children[1].children[2].children[0]
            let sumPrice=cardTag.children[1].children[2].children[0].innerHTML.split('$')[1]
            const countSection=cardTag.children[1].children[2].children[1].children[0].children[1]

            if(target.innerHTML==="+")
            {
                currentPrice.innerHTML=`$${Number(sumPrice)+unitPrice}`
                countSection.innerHTML=String((Number(countSection.innerHTML))+1)
                calculateFinalPRice()
            }
            else if(target.innerHTML==="-")
            {
                if(countSection.innerHTML>1)
                {
                    currentPrice.innerHTML=`$${Number(sumPrice)-unitPrice}`
                    countSection.innerHTML=String((Number(countSection.innerHTML))-1)
                    calculateFinalPRice()
                }
            }
        })
}
function calculateFinalPRice()
{
    let totalprice=0 ;
    const cardExample=document.querySelectorAll('.card-example')
    for ( let card of cardExample)
    {
        totalprice+=Number(card.children[1].children[2].children[0].innerHTML.split('$')[1])
    }
    document.getElementById("total-price-card-section").innerHTML=`$${totalprice}`

}
export function goTOCheckoutPage()
{
    
    cardItemPage.classList.add('blur')
    checkoutDownSection.classList.add('blur')
    checkoutModal.classList.remove('hidden')
}

export function addOrderToDatabase()
{
    const finalPrice=Number(document.getElementById("total-price-card-section").innerHTML.split('$')[1])
    cardItemPage.classList.remove('blur')
    checkoutDownSection.classList.remove('blur')
    checkoutModal.classList.add('hidden')
    const user = localStorage.getItem('customerName')
    console.log(user);
    removeCheckoutInUi(user,finalPrice)
}

async function removeCheckoutInUi(user,finalPrice)
{
    try {
        const response = await (await fetch(`http://localhost:3000/acounts/${user}`)).json()
        const data = await response;
        data.cardItems=[]
        const obj={
            "totalprice":finalPrice,
            "orderStatus":'inProgress',
            "id":""
        }
        data.orders.push(obj)
        removeCheckoutInDatabase(data,user,finalPrice);
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}

async function removeCheckoutInDatabase(data,user,finalPrice)
{
    cartItemsContainer.innerHTML=""
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
    // getOrderInfo(user,finalPrice)
}

// async function getOrderInfo(user,finalPrice)
// {
//     try {
//         const response = await (await fetch(`http://localhost:3000/acounts/${user}`)).json()
//         const data = await response;
//     } catch (err) 
//     { 
//         console.log(`your error is: ${err}`);
//     }
// }