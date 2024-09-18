# Dateisystem mit Node.js

In dieser Übung wirst du zwei Funktionen erstellen, die Dateisystem-Operationen in einer Node.js-Umgebung durchführen. Das Ziel ist es, praktische Erfahrungen mit dem **fs** (File System) Modul zu sammeln und zu lernen, wie man Dateien und Verzeichnisse dynamisch verwaltet.

## Ziel

Du wirst zwei Funktionen erstellen:

- **createFileWithMessage**: Diese Funktion erstellt eine Datei mit einer vorgegebenen Nachricht als Inhalt.
- **deleteFileByName**: Diese Funktion löscht eine Datei anhand ihres Namens.

## Anforderungen

### createFileWithMessage

- **Zweck**: Erstellt eine Datei mit einer Nachricht als Inhalt. Falls die Datei bereits existiert, sollte die Nachricht an die Datei angehängt werden.
- **Ausführung**: Sollte sowohl über das Terminal als auch als Funktion im Code aufrufbar sein, z. B.:
  ```bash
  node createFileWithMessage.js
  ```
- **Argumente**: Der Dateiname und die Nachricht, die als Inhalt in die Datei geschrieben oder angehängt werden soll, sollten als Argumente übergeben werden.
  ```bash
  node createFileWithMessage.js filename.txt "Nachricht zum Anhängen"
  ```

### deleteFileByName

- **Zweck**: Löscht eine Datei basierend auf dem angegebenen Dateinamen.
- **Ausführung**: Sollte sowohl über das Terminal als auch als Funktion im Code aufrufbar sein, z. B.:
  ```bash
  node deleteFileByName.js
  ```
- **Argumente**: Der Name der Datei, die gelöscht werden soll, sollte als Argument übergeben werden.
  ```bash
  node deleteFileByName.js filename.txt
  ```
