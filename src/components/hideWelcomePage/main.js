//other version:
// import { app } from "../../../main"
export const welcomePageContainer = document.getElementById('welcome-page-container')
export const welcomePage=document.getElementById('welcome-page')
export const poster=document.getElementById('poster')
export const firstSlide=document.getElementById('first-slide')
export const firstSlider=document.getElementById('first-slider')
export const secondSlide=document.getElementById('second-slide')
export const secondSlider=document.getElementById('second-slider')
export const thirdSlide=document.getElementById('third-slide')
export const thirdSlider=document.getElementById('third-slider')

export function welcomePageDeleter()
{
    // welcomePage.classList.toggle('hidden')
    // poster.classList.toggle('hidden')
}

export function posterDeleter()
{
    // poster.classList.toggle('hidden')
    // firstSlide.classList.toggle('hidden')
}

export function firstSlideDeleter()
{
    firstSlide.classList.toggle('hidden')
    secondSlide.classList.toggle('hidden')
}

export function secondSlideDeleter()
{
    secondSlide.classList.toggle('hidden')
    thirdSlide.classList.toggle('hidden')
}

export function thirdSlideDeleter()
{
    thirdSlide.classList.toggle('hidden')
}

    