export const eyeOpen=document.getElementById('eyeOpen')
export const eyeClose=document.getElementById('eyeClose')
export const inputPass1=document.getElementById('inputPass1')
export const inputPass2=document.getElementById('inputPass2')
export const signInBtn=document.getElementById('sign-in-btn')
export function eyeOpenFunc()
{
    eyeOpen.classList.toggle('hidden')
    eyeClose.classList.toggle('hidden')
    inputPass1.classList.toggle('hidden')
    inputPass2.classList.toggle('hidden')
}

export function eyeCloseFunc()
{
    eyeOpen.classList.toggle('hidden')
    eyeClose.classList.toggle('hidden')
    inputPass1.classList.toggle('hidden')
    inputPass2.classList.toggle('hidden')
}
