import React, {useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Rent',
    amount: 450,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Transportation',
    amount:300,
    date: new Date(2020, 7, 10),
  },
  {
    id: 'e3',
    title: 'Delivery',
    amount: 200,
    date: new Date(2020, 5, 3),
  },


  { 
    id: 'e4',
    title: 'New Book',
    amount:150,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e6',
    title: 'New Watch',
    amount: 450,
    date: new Date(2021, 6, 24) 
  },


  {  
    id: 'e5',
    title: 'House',
    amount: 350000,
    date: new Date(2022, 7, 2) 
},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);   

  // ...expenses >> to pull out all the existing array elements 
  // and populate the rest of this new array with those existing elements

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { 
      // That's the CLEAN way of updating our state when it's based on an
      // older snapshot of that same state
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;