import "./ExpenceDate.css";

function ExpenceDate(props) {
  const date = props.date.split(" ");
  let month = date[1];
  let year = date[3];
  let day = date[2];
  return (
    <div className="expense-date">
      <div className="expense-date__day"> {day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenceDate;
