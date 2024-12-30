import './App.css';
import Customer from "./components/Customer";
import {Component} from "react";
import {Table,TableBody, TableCell, TableHead, TableRow} from "@mui/material";

const customer = [
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
]
class App extends Component {
    render(){
        return(
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customer.map((item) =>{return (<Customer key={item.id} id={item.id} image={item.image} name={item.name} birthday={item.birthday} gender={item.gender} job={item.job}/>);})}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
export default App;
