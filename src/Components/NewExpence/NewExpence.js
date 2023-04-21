import "./NewExpence.css";
import ExpenceForm from "./ExpenseForm";

const NewExpence = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpence(expenseData);
        console.log(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};


export default NewExpence;