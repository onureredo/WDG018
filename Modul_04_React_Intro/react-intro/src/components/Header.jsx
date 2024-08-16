function Header(props) {
  return (
    <header>
      <nav>
        <ul className='flex'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Bla</a>
          </li>
          <li>
            <a href='#'>About - This is {props.year}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
