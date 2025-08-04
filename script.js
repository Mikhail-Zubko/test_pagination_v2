// XJIq9OFMcHAy8pAQK7xj
// 18aEQHs2_I3sCMmPg1yk

const BASE_URL = 'https://the-one-api.dev/v2/';
const END_POINT = 'character';
const KEY = '18aEQHs2_I3sCMmPg1yk';

function getCharacter() {
    const param = new URLSearchParams({
        limit: 30,
        page: 1,
    });

    const option = {
        method: 'GET',
        headers: {
            Authorization: `Bearer${KEY}`
        }
    }

    fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp))
}

getCharacter()