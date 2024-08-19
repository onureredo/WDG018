import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StudentCard from './components/StudentCard';
// import { studentData, students } from './data/student';
import { students } from './data/student';

// document.querySelector("button").addEventListener

function App() {
  const handleClick = () => {
    alert('Clicked!');
  };

  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <div className='flex flex-wrap gap-4 justify-center'>
        {/* <StudentCard studentData={studentData} /> */}
        {students.map((student) => (
          <StudentCard key={student.id} studentData={student} />
        ))}
      </div>

      <button onClick={handleClick} className='bg-slate-300 text-slate-900 py-2 px-3 rounded'>
        Click to alert!
      </button>
      <input className='m-4  py-2 px-3' type='text' onChange={handleInput} />
      <Footer />
    </>
  );
}

export default App;
