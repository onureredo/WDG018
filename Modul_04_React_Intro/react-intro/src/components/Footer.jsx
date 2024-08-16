function Footer(props) {
  // const date = new Date();
  // // console.log(date.getFullYear());
  // const year = date.getFullYear();
  console.log(props);
  return (
    <footer>
      <small>&copy; {props.year}</small>
    </footer>
  );
}

export default Footer;
