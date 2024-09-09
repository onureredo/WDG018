// fetch('http://localhost:3001/api/events'); // get all events

// fetch(`http://localhost:3001/api/events/${id}`); // event 5

// 'nur text ${id}'
// const id  = 9
// `template literal ${id}` /* -> */ 'template literal 9'

// 'http://localhost:3001/api/events/' + id

const run = async () => {
  const res = await fetch('http://localhost:3001/api/events', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Event Title',
      description: 'Some Description for the Event',
      date: '2024-09-03T09:29:55.827Z',
      location: 'Schloßbezirk 10, 76131 Karlsruhe',
      latitude: 8.404746955649602,
      longitude: 49.01438194665317,
    }),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI1MzU2MjA5LCJleHAiOjE3Mjg5NTYyMDl9.CGlGUn9KVs7oRmIj4AmynJNc8dvmT-NSNBUReTjMBJE`,
    },
  });
  const data = await res.json();

  console.log(data);
};

run();

// Erst muss sich User anmelden und einloggen.
// Beim Einloggen speichert ihr den token im localStorage.
// {
//   "user": {
//     "id": 1,
//     "email": "user@example.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI1MzU2MjA5LCJleHAiOjE3Mjg5NTYyMDl9.CGlGUn9KVs7oRmIj4AmynJNc8dvmT-NSNBUReTjMBJE"
// }

const favorites = [1, 2, 3, 4, 5];

localStorage.setItem('favorites', JSON.stringify(favorites));

const exists = favorites.find((item) => item === 2);
if (!exists) {
  favorites.push(2);
}

// setFavorites(old => [...old, 2])
