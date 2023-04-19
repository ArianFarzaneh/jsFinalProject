import { welcomePageContainer , welcomePage , poster , firstSlide , firstSlider , secondSlide , secondSlider , thirdSlide , thirdSlider , welcomePageDeleter , posterDeleter , firstSlideDeleter , secondSlideDeleter,thirdSlideDeleter} from "./src/components/hideWelcomePage/main"
import { eyeOpen , eyeClose , inputPass1 , inputPass2 , signInBtn , eyeOpenFunc , eyeCloseFunc , checkLoginTruth, userInput} from "./src/components/loginHandle/main"
import { renderProductsContainer , getAllProductsData ,brandsMenuContainer , renderBrandInMainPage } from "./src/components/renderAllProducts/main"
import { loadnikePage , loadadidasPage , loadpumaPage , loadasicsPage , loadnewbalancePage , loadconversePage} from "./src/components/renderByBrandsRoute/main"
import { openProductFunc } from "./src/components/openProductsPage/main"
import { renderCardPage } from "./src/components/cardPageHandle/main"


if(window.location.href==="http://localhost:5173/")
{
//   welcomePage.addEventListener('click',()=>
//   {
//     welcomePageDeleter()
//   })
    setTimeout(()=>
    {
        welcomePage.classList.toggle('hidden')
        poster.classList.toggle('hidden')
    },3000)

    setTimeout(()=>
    {
        poster.classList.toggle('hidden')
    firstSlide.classList.toggle('hidden')
    },5000)
//   poster.addEventListener('click',()=>
//   {
//     posterDeleter()
//   })
  firstSlider.addEventListener('click',()=>
  {
    firstSlideDeleter()
  })
  secondSlider.addEventListener('click',()=>
  {
    secondSlideDeleter()
  })
  thirdSlider.addEventListener("click",()=>
  {
    thirdSlideDeleter()
    // location.reload();
  })
}
else if(window.location.href==='http://localhost:5173/login')
{
  localStorage.clear();
  eyeOpen.addEventListener('click',()=>
  {
    eyeOpenFunc()
  })

  eyeClose.addEventListener('click',()=>
  {
    eyeCloseFunc()
  })
  signInBtn.addEventListener('click',(e)=>
  {
    e.preventDefault()
    checkLoginTruth("http://localhost:3000/acounts",userInput.value)
    route()
  })
}
else if(window.location.href==='http://localhost:5173/products')
{
  
    const customerName=localStorage.getItem("customerName")
    const CustomerNameDisplay=document.getElementById('name-of-customer')
    CustomerNameDisplay.innerHTML=customerName
    getAllProductsData()
    brandsMenuContainer.addEventListener('click',(e)=>
    {
      let target=e.target
      if(target.innerHTML==='All')
      {
        getAllProductsData()
      }
      else
      {
        renderBrandInMainPage(`http://localhost:3000/products?brand=${target.innerHTML}`,target)
      }
    })
    renderProductsContainer.addEventListener('click',(e)=>
    {
      let target = e.target
      openProductFunc(target)
    })
}
else if(window.location.href==='http://localhost:5173/card')
{
  renderCardPage()
}
else if(window.location.href==='http://localhost:5173/nike')
{
  loadnikePage()
}
else if(window.location.href==='http://localhost:5173/adidas')
{
  loadadidasPage()
}
else if(window.location.href==='http://localhost:5173/puma')
{
  loadpumaPage()
}
else if(window.location.href==='http://localhost:5173/asics')
{
  loadasicsPage()
}
else if(window.location.href==='http://localhost:5173/newbalance')
{
  loadnewbalancePage()
}
else if(window.location.href==='http://localhost:5173/converse')
{
  loadconversePage()
}