import './App.css';
import Customer from "./components/Customer";
import {Component} from "react";
import {Table,TableBody, TableCell, TableHead, TableRow} from "@mui/material";

class App extends Component {

    state = {
        customers:[]
    }

    componentDidMount() { //모든 컨포넌트가 실행될때
        this.callApi()
            .then(res => this.setState({customers: res}))
            .catch(err => console.log(err))
    }

    callApi = async () =>{
        const response = await fetch('/api/customers');
        const body = await response.json();

        return body;
    }

    render(){
        return(
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
                        {this.state.customers ? this.state.customers.map((item) =>{
                            return (<Customer
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                birthday={item.birthday}
                                gender={item.gender}
                                job={item.job}
                            />)
                        }) : []}
                    </TableBody>
                </Table>
        )
    }
}
export default App;
