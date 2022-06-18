import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("db.db")
const user = SQLite.openDatabase("user.db")

export default (db, user)