import "./ExpensesList.css";
import ExpenceItem from "./ExpenceItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenceItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date.toDateString()}
        ></ExpenceItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
