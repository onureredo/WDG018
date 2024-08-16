import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const date = new Date();
  // console.log(date.getFullYear());
  const year = date.getFullYear();

  return (
    <div>
      <Header year={year} />
      <h1>Hello, React!</h1>
      <img
        src='https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
        alt=''
      />
      <Footer year={year} />
    </div>
  );
}

export default App;
