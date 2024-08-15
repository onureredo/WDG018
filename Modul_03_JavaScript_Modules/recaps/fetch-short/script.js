const fetchJoke = async () => {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?lang=de&type=single');
    console.log(response);
    if (!response.ok) throw Error('Fetching failed');

    const data = await response.json();

    console.log(data);
    //  etwas mit den daten tun
    document.querySelector('h1').textContent = data.joke;
  } catch (error) {
    console.log(error);
    document.querySelector('h1').textContent = 'Sorry, please try again';
  }
};

fetchJoke();
