// Mögliche Schreibweisen im Umgang mit dem props-Objekt

// const Button = (props) => {
//   console.log(props);
//   return <button className={props.className}>{props.text}</button>;
// };

// export default Button;

// const Button = (props) => {
//   const { className, text } = props;

//   return <button className={className}>{text}</button>;
// };

// export default Button;

// Übliche Schreibweise. Das props-Object wird direkt in den Klammer destrukturiert.
// Destrukturieren bedeutet namentlich die Bestandteile eines Objektes herauspicken.
const Button = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
