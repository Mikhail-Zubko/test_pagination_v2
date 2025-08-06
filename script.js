// XJIq9OFMcHAy8pAQK7xj
// 18aEQHs2_I3sCMmPg1yk

// const BASE_URL = 'https://the-one-api.dev/v2/';
// const END_POINT = 'character';
// const KEY = '18aEQHs2_I3sCMmPg1yk';

// function getCharacter() {
//     const param = new URLSearchParams({
//         limit: 30,
//         page: 1,
//     });

//     const option = {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer${KEY}`
//         }
//     }

//     fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp))
// }

// getCharacter()


// https://developer.themoviedb.org/docs/getting-started

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = '345007f9ab440e5b86cef51be6397df1';

function getTrending() {
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then(resp => {
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    })
}

getTrending().then(data => console.log(data)).catch(err => console.log(err))

