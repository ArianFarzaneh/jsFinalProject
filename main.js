import { welcomePageContainer , welcomePage , poster , firstSlide , firstSlider , secondSlide , secondSlider , thirdSlide , thirdSlider , welcomePageDeleter , posterDeleter , firstSlideDeleter , secondSlideDeleter,thirdSlideDeleter} from "./src/components/hideWelcomePage/main"
import { eyeOpen , eyeClose , inputPass1 , inputPass2 , signInBtn , eyeOpenFunc , eyeCloseFunc , checkLoginTruth, userInput} from "./src/components/loginHandle/main"
import { renderProductsContainer , getAllProductsData } from "./src/components/renderAllProducts/main"
// import { getProductsData , getUserData } from "./src/components/getData/main"



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

  })
}
else if(window.location.href==='http://localhost:5173/products')
{
    getAllProductsData()
}