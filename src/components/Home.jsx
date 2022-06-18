import React, {useState} from "react";
import AddNewExpen from "./NewExpen/AddNewExpen";
import Expenses from "./Expenses/Expenses";
import Wrapper from "./Helpers/Wrapper";

const Home = () =>{
    const [expneses, setExpness] = useState([
        {
            id: 1,
            title: 'Car Insurance',
            amount: 253.458,
            date: new Date(2021,1,5)
        },
        {
            id: 2,
            title: 'Pen',
            amount: 534.8,
            date: new Date(2021,3,7)
        },
        {
            id: 3,
            title: 'pencil',
            amount: 345.67,
            date: new Date(2023,6,20)
        },
        {
            id: 4,
            title: 'papers',
            amount: 878,
            date: new Date(2022,4,23)
        },
        {
            id: 4,
            title: 'Books',
            amount: 567.3,
            date: new Date(2020,8,23)
        },
        {
            id: 5,
            title: 'REetruent',
            amount: 3457.2,
            date: new Date(2021,11,5)
        },
        {
            id: 5,
            title: 'Pen',
            amount: 890.2,
            date: new Date(2020,12,7)
        },
        {
            id: 6,
            title: 'Keyboard',
            amount: 456,
            date: new Date(2023,10,20)
        },
        {
            id: 7,
            title: 'Mouse',
            amount: 878.23,
            date: new Date(2022,9,23)
        },
        {
            id: 8,
            title: 'Cable',
            amount: 567.3,
            date: new Date(2020,2,23)
        },
    ])
    const finalSubmitForm = data=>{
        setExpness((exisData)=>{
            return [data, ...exisData]
        })
    }

    return React.createElement(
        Wrapper, {},
        React.createElement('h2', {}, "Let's Get Start"),
        React.createElement(AddNewExpen, {onsubmitForm:finalSubmitForm}),
        React.createElement(Expenses, {items: expneses})
    )
}
export default Home
