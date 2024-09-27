import http from 'http';
const server = http.createServer((req, res) => {
  // Erstelle einen HTTP-Server. 'req' ist das ankommende Request-Objekt, 'res' das Response-Objekt.

  res.statusCode = 200; // Setze den HTTP-Statuscode auf 200 (OK).
  //   Der Content-Type-Header gibt an, welcher Medientyp die zurückgegebenen Daten haben. In diesem Fall bedeutet 'text/plain', dass der Server einfachen Text sendet
  res.setHeader('Content-Type', 'text/plain');
  //   Das Setzen des Content-Type-Headers ist nicht unbedingt erforderlich, um die Daten zu senden, aber es ist eine gute Praxis.
  //   Wenn der Header nicht gesetzt ist, wird der Browser oft den Standardtyp text/plain verwenden, was dazu führen kann, dass HTML oder JSON als einfacher Text angezeigt wird.
  //   Wenn du also den Content-Type korrekt angibst, verbessert das die Darstellung und Verarbeitung der Daten im Client

  //   in Express:
  //   res.json({ message: 'Hello, World!' }); Setzt Content-Type auf application/json
  //   res.send('Hello, World!'); // Setzt Content-Type auf text/plain

  res.end('Hello, World!'); // Beende die Antwort mit dem Text 'Hello, World!'.
});

const port = 3000;

server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
