const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//USING ASYNC/AWAIT 
async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config) // this is where we get the dad jokes from 

    const data = await res.json()

    jokeE1.innerHTML = data.joke
}
