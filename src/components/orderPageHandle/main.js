export const activeOrdersContainer = document.getElementById('active-orders-container')
export const complitedOrdersContainer = document.getElementById('complited-orders-container')
export const activeOrdersBtn = document.getElementById("active-orders-btn")
export const completedOrdersBtn = document.getElementById("completed-orders-btn")

export async function renderOrdersFunc()
{
    const user = localStorage.getItem('customerName')
    try {
        const response = await (await fetch(`http://localhost:3000/acounts/${user}`)).json()
        const data = await response;
        renderOrdersUi(data);
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}

function renderOrdersUi(data)
{
    const orders = data.orders
    let inProgresscounter=1
    let completedCounter=1
    orders.map(item=>
    {
        if (item.orderStatus==='inProgress')
        {
            let card =`
            <div class="active-order-card flex bg-white rounded-full p-3 w-full h-[50px] mt-2 mb-4">
                <div class="text-left font-bold text-lg w-[90%]">in progress order number ${inProgresscounter}</div>
                <div class="text-right ">$${item.totalprice}</div>
            </div>
            `
            activeOrdersContainer.insertAdjacentHTML("beforeend",card)
            inProgresscounter++
        }
        else if(item.orderStatus==='completed')
        {
            let card =`
            <div class="active-order-card flex bg-white rounded-full p-3 w-full h-[50px] mt-2 mb-4">
                <div class="text-left font-bold text-lg w-[90%]">complited order number ${completedCounter}</div>
                <div class="text-right ">$${item.totalprice}</div>
            </div>
            `
            complitedOrdersContainer.insertAdjacentHTML("beforeend",card)
            completedCounter++
        }
    })
}
