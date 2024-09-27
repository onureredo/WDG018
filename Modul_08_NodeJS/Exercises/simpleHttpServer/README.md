# Node.js File Operations with HTTP Server

hier kombinieren wir Exercise 1 & 2 FS & HTTP MODULE =>

- Erstellen und Löschen von Dateien mit einem einfachen HTTP-Server, der Anfragen über POST- und DELETE-Methoden verarbeitet.

## Übersicht

- **Exercise 1:** FS-Module (Read & Write)
- **Exercise 2:** HTTP-Module

## Funktionen

- **POST /files**

  - Erstellt eine neue Datei mit einer gegebenen Nachricht.
  - Beispiel-Request-Body:
    ```json
    {
      "message": "Test"
    }
    ```

- **DELETE /files/<directory>/<filename>**
  - Löscht die angegebene Datei, wenn sie existiert.
  - Beispiel-Request-URL:
    ```
    http://localhost:3000/files/2024-09-18/14-48-58.txt
    ```
