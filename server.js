const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (request,response) =>{
    response.send([
        {
            'id':1,
            'image':'http://Placehold.it/100/1',
            'name':'홍길동',
            'birthday': '950222',
            'gender':'남자',
            'job':'대학생'
        },
        {
            'id':2,
            'image':'http://Placehold.it/100/2',
            'name':'아론파크',
            'birthday': '922222',
            'gender':'여자',
            'job':'직장인'
        },
        {
            'id':3,
            'image':'http://Placehold.it/100/3',
            'name':'드라군',
            'birthday': '222222',
            'gender':'알수 없음',
            'job':'외계인'
        }
    ]);
});

app.listen(port, () =>{ console.log(`server on ${port}`); })