# Node.js Intro

## Installation

Um ein NodeJS Projekt zu initialisieren, führe folgendes im Projektordner aus:

```
npm init
```

Oder verwende `-y` für eine schnelle Initialisierung mit Standardeinstellungen:

```
npm init -y
```

Installiere die Entwicklungsabhängigkeit **nodemon**, um den Server bei Änderungen automatisch neu zu starten:

```
npm install --save-dev nodemon
```

## Skripte

In der `package.json` gibt es folgende Skripte:

- **Server starten**:

  ```
  npm start
  ```

  Startet den HTTP-Server auf Port 3000.

- **Entwicklungsmodus (mit automatischem Neustart)**:

  ```
  npm run dev
  ```

  Verwendet **nodemon** und startet den Server mit automatischen Neustarts bei Dateiänderungen.

- **Watch-Modus**:

  ```
  npm run watch
  ```

## HTTP-Server

einen einfachen HTTP-Server, der auf Port 3000 läuft. Der Server gibt eine einfache Nachricht als Antwort auf Anfragen zurück.

## Dateioperationen (synchron und asynchron)

- **Asynchron**: Ermöglicht die Ausführung anderer Operationen, während eine Datei gelesen wird.
- **Synchron**: Blockiert den Ablauf, bis die Dateioperation abgeschlossen ist.

Beide Ansätze sind im Projektcode implementiert.

## Node.js Module-System

Das Projekt verwendet das **ES-Module-System** (`import/export`), was in der `package.json` durch den Eintrag `"type": "module"` aktiviert wurde.

## .gitignore

Vergiss nicht, eine `.gitignore`-Datei hinzuzufügen, um unnötige Dateien von deinem Git-Repository auszuschließen:

```
node_modules/
.env
```
