import dotenv from 'dotenv'
dotenv.config() 

import mysql from 'mysql2'  

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {
	const [rows] = await pool.query("SELECT * FROM users")
	return rows
}
 
export async function getUserID(ID) {
	const [rows] = await pool.query(`
		SELECT *
		FROM users
		WHERE ID = ?
		`, [ID])
	return rows [0]
}

export async function getUserEmail(email) {
	const [rows] = await pool.query(`
		SELECT *
		FROM users
		WHERE email = ?
		`, [email])

		//if (rows.length == 0) return null
	return rows [0]
}

export async function createUser(email, password) {
	const [result] = await pool.query(`
	INSERT INTO users (email, password)
	VALUES (?, ?)
	`, [email, password])	
	//const ID = result.insertID
	return {id: result.insertId} //getUser(ID)
} 