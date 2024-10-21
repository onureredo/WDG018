# Sequelize Setup mit PostgreSQL Step-by-Step Anleitung

## Was ist Sequelize?

Sequelize ist ein Promise-basierter ORM (Object Relational Mapping) für Node.js. Es hilft uns dabei, Datenbankabfragen in einer JavaScript-Syntax durchzuführen, anstatt SQL direkt zu schreiben.

### 1. Installation von Sequelize und PostgreSQL

Stelle sicher, dass du Sequelize und PostgreSQL installiert hast.

```bash
npm install sequelize pg
```

### 2. Sequelize-Instanz einrichten

Erstelle eine Datei `db/server.js` und initialisiere Sequelize, indem du deine PG-URI connection string verwendest. ==> .env

```js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URI, {
  define: {
    freezeTableName: true,
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the NEON');

    // Synchronisiere alle Modelle mit der Datenbank
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Fehler bei der DB-Verbindung:', error);
  }
};

connectDB();

export default sequelize;
```

Hier verwenden wir: `sequelize.sync({ alter: true })`, um alle definierten Modelle zu synchronisieren. Falls eine Tabelle nicht existiert, wird sie erstellt.

### 3. Definieren von Modellen

Ein Modell in Sequelize stellt eine Tabelle in der Datenbank dar. Hier definieren wir ein `User`-Modell und ein `Post`-Modell.

#### User Model

Erstelle eine Datei `models/User.js`:

```js
import { DataTypes } from 'sequelize';
import sequelize from '../db/server.js';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default User;
```

#### Post Model

Erstelle eine Datei `models/Post.js`:

```js
import { DataTypes } from 'sequelize';
import sequelize from '../db/server.js';
import User from './User.js';

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Definiere die Beziehung zwischen Post und User
Post.belongsTo(User, { foreignKey: 'author' });
User.hasMany(Post, { foreignKey: 'author' });

export default Post;
```

### 4. Beziehungen zwischen Tabellen herstellen

Nun haben wir eine Beziehung zwischen den Modellen `User` und `Post` hergestellt. Ein Post gehört zu einem User (`Post.belongsTo(User)`), und ein User kann mehrere Posts haben (`User.hasMany(Post)`).

### 5. Synchronisieren der Modelle mit der Datenbank

Wenn du sicherstellen möchtest, dass alle definierten Modelle mit der Datenbank synchronisiert werden, kannst du dies durch den Aufruf von `sequelize.sync()` tun. Dieser Befehl stellt sicher, dass, falls Tabellen fehlen, sie in der Datenbank erstellt werden.

```js
await sequelize.sync({ alter: true });
```

Dieser Code sorgt dafür, dass alle Änderungen oder neuen Tabellen in der Datenbank erstellt werden.

## Summary

Sequelize bietet eine flexible Möglichkeit, mit relationalen Datenbanken zu arbeiten. Es erleichtert die Definition von Tabellen, die Synchronisierung mit der Datenbank und die management von Beziehungen zwischen Tabellen.
