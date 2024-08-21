const Counter = ({ number, setNumber }) => {
  // console.log(props);
  // const number = props.number;
  // const setNumber = props.setNumber;
  // const { number, setNumber } = props;
  return (
    <div>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default Counter;
