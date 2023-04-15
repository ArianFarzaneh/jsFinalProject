import { eyeOpen , eyeClose , inputPass1 , inputPass2 , signInBtn , eyeOpenFunc , eyeCloseFunc } from "./src/components/loginHandle/main"
import { welcomePageContainer , welcomePage , poster , firstSlide , firstSlider , secondSlide , secondSlider , thirdSlide , thirdSlider , welcomePageDeleter , posterDeleter , firstSlideDeleter , secondSlideDeleter,thirdSlideDeleter} from "./src/components/hideWelcomePage/main"
console.log(window. location. href)
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
}