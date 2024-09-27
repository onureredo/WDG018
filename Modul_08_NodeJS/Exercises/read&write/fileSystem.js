import { access, appendFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';
import { format } from 'date-fns'; // Importiere 'format' aus date-fns ==> npm i date-fns nicht vergessen.

// Funktion, um ein Verzeichnis zu erstellen, falls es nicht existiert
// access : Überprüft die Berechtigungen des Benutzers, um auf einen Pfad oder eine Datei zuzugreifen.
//          Dies dient effektiv dazu, zu überprüfen, ob der Pfad oder die Datei existiert.

// writeFile : Schreibt Daten in eine Datei. Wenn die Datei nicht existiert, wird sie erstellt.
//             Wenn die Datei bereits existiert, wird der vorhandene Inhalt überschrieben.

// mkdir : Erstellt ein Verzeichnis (Directory) an dem angegebenen Pfad.

// unlink : Entfernt symbolische Links (Verknüpfungen) oder Dateien. Im Kontext dieser Übung wird es zum Löschen von Dateien verwendet.
const createDirIfNotExists = async (dirPath) => {
  try {
    await access(dirPath);
    console.log(`Directory ${dirPath} already exists.`); // Ausgabe statt Rückgabe
  } catch (error) {
    await mkdir(dirPath);
    console.log(`Directory ${dirPath} created successfully.`); // Ausgabe statt Rückgabe
  }
};

// Funktion, um eine Datei mit einer Nachricht zu erstellen oder anzuhängen
export const createFileWithMessage = async (message) => {
  try {
    // Hole das aktuelle Datum und die aktuelle Zeit
    const now = new Date();

    // Verwende format von date-fns, um das Datum und die Zeit im gewünschten Format zu erhalten
    const dirName = format(now, 'yyyy-MM-dd'); // Verzeichnisname im Format 'YYYY-MM-DD'
    const fileName = format(now, 'HH-mm-ss') + '.txt'; // Dateiname im Format 'HH-MM-SS.txt'

    // Erstelle das Verzeichnis, wenn es noch nicht existiert
    await createDirIfNotExists(dirName);

    // Erstelle den Dateipfad, indem das Verzeichnis und der Dateiname kombiniert werden
    const filePath = join(dirName, fileName);

    // Füge die Nachricht an die Datei an, wenn sie bereits existiert, oder erstelle die Datei
    await appendFile(filePath, message + '\n');
    console.log('File created successfully at', filePath); // Ausgabe mit Pfad
  } catch (error) {
    console.log(error);
  }
};

// Funktion, um eine Datei anhand ihres Dateipfades zu löschen
export const deleteFileByName = async (filePath) => {
  try {
    await access(filePath); // Überprüfe, ob die Datei existiert
    await unlink(filePath); // Lösche die Datei
    console.log('File deleted successfully!'); // Erfolgsnachricht
  } catch (error) {
    console.log('File not found.'); // Fehlermeldung
  }
};

// Terminal-Ausführung process.argv ist ein Array in Node.js, das die Commandline enthält, mit denen das Skript ausgeführt wurde.
// 0 vollständige Pfad
// 1 Der Pfad zur JS Datei, die ausgeführt wird
// 2,3 das erste und zweite Argument von User ==> create oder delete
// schaue gerne bei processArgv.js nach!
const command = process.argv[2]; // Erstes Terminal-Argument: Befehl (create oder delete)
const argument = process.argv[3]; // Zweites Terminal-Argument: Nachricht oder Dateiname

// Falls der Befehl 'create' ist und eine Nachricht übergeben wurde
if (command === 'create' && argument) {
  createFileWithMessage(argument); // Rufe die Funktion zum Erstellen der Datei auf
}
// Falls der Befehl 'delete' ist und ein Dateiname übergeben wurde
else if (command === 'delete' && argument) {
  deleteFileByName(argument); // Rufe die Funktion zum Löschen der Datei auf
}
// Falls der Befehl ungültig ist oder ein Argument fehlt
else {
  console.log(
    'Invalid command or missing argument. Use "create <message>" or "delete <fileName>".'
  );
}
