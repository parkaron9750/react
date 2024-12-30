import './App.css';
import Customer from "./components/Customer";
import {Component} from "react";

const customer = [
    {
        'id':1,
        'image':'http://Placehold.it/100/1',
        'name':'홍길동',
        'brithday': '950222',
        'gender':'남자',
        'job':'대학생'
    },
    {
        'id':2,
        'image':'http://Placehold.it/100/2',
        'name':'아론파크',
        'brithday': '922222',
        'gender':'여자',
        'job':'직장인'
    },
    {
        'id':3,
        'image':'http://Placehold.it/100/3',
        'name':'드라군',
        'brithday': '222222',
        'gender':'알수 없음',
        'job':'외계인'
    }
]
class App extends Component {
    render(){
        return(
            <div>
                {customer.map((item) =>{return (<Customer key={item.id} id={item.id} image={item.image} name={item.name} birthday={item.brithday} gender={item.gender} job={item.job}/>);})}
            </div>
        )
    }
}
export default App;
