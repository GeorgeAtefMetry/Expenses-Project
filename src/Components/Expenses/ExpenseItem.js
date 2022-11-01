import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => { 

  //     title is a Pointer at that managed value = props.title
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  return (   
    <Card className="expense-item">
        <ExpenseDate date = {props.date} ></ExpenseDate>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
          </div>
    </Card>
  );
}

export default ExpenseItem;
