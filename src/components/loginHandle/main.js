export const eyeOpen=document.getElementById('eyeOpen')
export const eyeClose=document.getElementById('eyeClose')
export const userInput  = document.getElementById('user-input')
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

export async function checkLoginTruth(url,userInput)
{
    try {
        let response = await fetch(`${url}/${userInput}`)
        if(response.status===200)
        {
            response = await response.json()
            const data = await response;
            if(data.password===inputPass1.value || data.password===inputPass2.value)
            {
                console.log('you entered correct!');
                route('/products')
            }
            else
            {
                console.log('you entered wrong!');
            }
        }
        else
        {
            console.log('your user is wrong');
        }
        
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
    }
}
