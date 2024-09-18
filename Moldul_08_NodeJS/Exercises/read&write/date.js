import { access, appendFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';

export const createDirIfNotExists = async (dirPath) => {
  // Check if directory exists, if not, create it
  try {
    await access(dirPath);
    return `Directory ${dirPath} already exists.`;
  } catch (error) {
    await mkdir(dirPath);
    return `Directory ${dirPath} created successfully.`;
  }
};

// Function to create a file with a message
export const createFileWithMessage = async (message) => {
  try {
    // Get the current date and time
    const now = new Date();
    // Create a directory name with the current date
    // now.getFullYear() gibt das Jahr zurück (z.B. 2024)
    // now.getMonth() gibt den Monat zurück, aber in einem nullbasierten Index (0-11), deshalb wird 1 hinzugefügt
    // padStart(2, '0') stellt sicher, dass der Monat und der Tag immer zweistellig formatiert sind (z.B. 08 statt 8)
    const dirName = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    // Create a file name with the current time
    const fileName = `${now.getHours().toString().padStart(2, '0')}-${now
      // now.getHours(), now.getMinutes(), und now.getSeconds() holen die aktuellen Stunden, Minuten und Sekunden
      // padStart(2, '0') stellt sicher, dass die Zeitkomponenten immer zweistellig sind (z.B. 09:05:01 statt 9:5:1)
      .getMinutes()
      .toString()
      .padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}.txt`;
    // Create directory if it does not exist
    await createDirIfNotExists(dirName);
    // Create the file path
    const filePath = join(dirName, fileName);
    // Append message to the file if it exists, otherwise create the file
    await appendFile(filePath, message + '\n');
    console.log('File created successfully!');
  } catch (error) {
    console.log(error);
  }
};

// access : Überprüft die Berechtigungen des Benutzers, um auf einen Pfad oder eine Datei zuzugreifen.
//          Dies dient effektiv dazu, zu überprüfen, ob der Pfad oder die Datei existiert.

// writeFile : Schreibt Daten in eine Datei. Wenn die Datei nicht existiert, wird sie erstellt.
//             Wenn die Datei bereits existiert, wird der vorhandene Inhalt überschrieben.

// mkdir : Erstellt ein Verzeichnis (Directory) an dem angegebenen Pfad.

// unlink : Entfernt symbolische Links (Verknüpfungen) oder Dateien. Im Kontext dieser Übung wird es zum Löschen von Dateien verwendet.

// Function to delete a file by name
export const deleteFileByName = async (filePath) => {
  try {
    // Check if the file exists
    await access(filePath);
    // Delete the file
    await unlink(filePath);

    console.log('File deleted successfully!');
  } catch (error) {
    console.log('File not found.');
  }
};

// Terminal execution
const command = process.argv[2]; // Erstes Terminal-Argument: Befehl (create oder delete)
const argument = process.argv[3]; // Zweites Terminal-Argument: Nachricht oder Dateiname

if (command === 'create' && argument) {
  createFileWithMessage(argument);
} else if (command === 'delete' && argument) {
  deleteFileByName(argument);
} else {
  console.log(
    'Invalid command or missing argument. Use "create <message>" or "delete <fileName>".'
  );
}
