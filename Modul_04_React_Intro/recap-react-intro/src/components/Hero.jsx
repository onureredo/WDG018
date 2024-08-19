import './hero.css';

const Hero = () => {
  const numbers = [1, 2, 3, 4, 5];

  const summerDay = {
    temperature: 27,
    date: '19.08',
    weekday: 'Monday',
  };

  const students = [
    {
      name: 'Sia',
      favouriteLang: 'OCaml',
    },
    { name: 'Albert', favouriteLang: 'Pascal' },
    { name: 'Iasmina', favouriteLang: 'Python' },
  ];

  return (
    <section className='hero'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint totam! Totam aut aspernatur nemo in libero
        tempore, deserunt quos eligendi exercitationem at architecto velit earum. Cum dolorem non vero.
      </p>
      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
      <h2>
        Today is {summerDay.weekday}, the {summerDay.date}. It's {summerDay.temperature}°C
      </h2>
      {students.map((student) => (
        <div className='my-4 mx-6' key={student.name}>
          <h3>{student.name}</h3>
          <p>Lieblingsprogrammiersprache: {student.favouriteLang}</p>
        </div>
      ))}
    </section>
  );
};

export default Hero;
