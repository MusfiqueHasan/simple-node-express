const express = require('express')
const cors = require('cors')
const app = express();



app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('hello EXPRESS js');
})

const users = [
    {
        id: 0,
        name: 'sabana',
        email: 'sabana@gmail.com',
        phone: '0123456788'
    },
    {
        id: 1,
        name: 'shabnur',
        email: 'shabnur@gmail.com',
        phone: '0123456788'
    },
    {
        id: 2,
        name: 'srabonti',
        email: 'srabonti@gmail.com',
        phone: '0123456788'
    },
    {
        id: 3,
        name: 'suchorita',
        email: 'suchorita@gmail.com',
        phone: '0123456788'
    },
    {
        id: 4,
        name: 'soniya',
        email: 'soniya@gmail.com',
        phone: '0123456788'
    },
    {
        id: 5,
        name: 'susmita',
        email: 'susmita@gmail.com',
        phone: '0123456788'
    },
]
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {

        res.send(users)
    }
})

app.post('/users', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting", req.body)
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.listen(port, () => {
    console.log("listening to port", port)
});