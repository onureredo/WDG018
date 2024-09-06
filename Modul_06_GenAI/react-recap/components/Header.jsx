import Button from './Button';

// props drilling - reicht text von Elternelement an Kindelement weiter
function Header({ text }) {
  return (
    <h2>
      Header
      <Button text={text} />
    </h2>
  );
}

export default Header;
