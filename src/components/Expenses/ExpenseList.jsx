import './expensList.css'
import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
const ExpenseList = (props)=>{
if(props.items.length === 0)
    return (<h2 className="expenses-list__fallback">No Result Found</h2>)
    return (
        <ul className="expenses-list">
            { props.items.map((item, i)=>{
                return (<ExpenseItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />)} )}
        </ul>
    )
}
export default ExpenseList
