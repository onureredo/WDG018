const fetchStuff = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const number = 172654;

const a = 'skdjfbs';
const b = 'skdjfbs';
const c = 'skdjfbs';
const d = 'skdjfbs';
const e = 'skdjfbs';
const f = 'skdjfbs';

export { fetchStuff, a, b, c, d, e, f };
export default number;
