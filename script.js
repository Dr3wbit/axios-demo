const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c118demouser';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(response => {
    console.log(response);

    const listElements = response.data.todos.map((item, index) => {
        const tr = document.createElement('tr');
        const number = document.createElement('td');
        const title = document.createElement('td');
        const completed = document.createElement('td');

        number.innerText = index + 1;
        title.innerText = item.title;
        completed.innerText = item.complete;

        tr.appendChild(number);
        tr.appendChild(title);
        tr.appendChild(completed);

        document.querySelector('.table tbody').appendChild(tr);
    });
});

const todoItem = {
    tiddle: 'Andrew\'s Super Secret Secrets',
    details: 'this is a test secret'
};

axios.post(`${BASE_URL}/todos${API_KEY}`, todoItem).then(response => {
    console.log(response)
}).catch(err => {
    console.log(err.response.data.error);

    console.log(err.message)
})

