import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpeneseList = props => {  

    if (props.items.length === 0 ){
        return <h2 className='expenses-list__fallback'>Found None</h2>
    }

    {/* OLD WAY IT JUST LONG SYNTAX */}
    {/*
    <ExpenseItem
        title={props.items[0]       .title}
        amount={props.items[0].amount}
        date={props.items[0].date}
    />
    <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
    />
    */}
    return (
    <ul className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))};
    </ul>
    );
};

export default ExpeneseList; 