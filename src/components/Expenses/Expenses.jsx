import React, {useState, Fragment} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import Filter from "./Filter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filterYear, setyear] = useState('2020');
    const filterChangeHandler = data => {
        setyear(data)
    }

    const items = props.items.filter((item)=>{
        return item.date.getFullYear().toString() === filterYear
    })
    return (
        <Fragment>
            <Card className="expense">
                <Filter selected={filterYear} onChangeFilter={filterChangeHandler}></Filter>
                <ExpensesChart expenses={items} />
                <ExpenseList items={items}/>
            </Card>
            <Card>
                <h1>Bottom card</h1>
            </Card>
        </Fragment>
    );
}
export default Expenses;
