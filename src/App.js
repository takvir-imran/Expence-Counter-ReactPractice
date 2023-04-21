import Expences from "./Components/Expence/Expences";
import NewExpence from "./Components/NewExpence/NewExpence";
import { useState } from "react";

const dummyExpences = [
  { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date() },
  { id: "e2", title: "Toilet Paper", amount: 94.67, date: new Date() },
  { id: "e3", title: "New TV", amount: 294.67, date: new Date() },
  { id: "e4", title: "New Desk (Wooden)", amount: 294.67, date: new Date()},
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpences);

  const addExpenseHandler = (expense) => {
    //console.log("In App.js");
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
    
 
  return (
    <div>
      <NewExpence onAddExpence={addExpenseHandler} />
      <Expences item={expenses} />
    </div>
  );
}

export default App;
