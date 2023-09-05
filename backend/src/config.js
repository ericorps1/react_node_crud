import pkg from 'pg';
const { Pool } = pkg;

export const DB_HOST = 'localhost';
export const DB_USER = 'postgres';
export const DB_PASSWORD = 'Anjunabeats10';
export const DB_NAME = 'mi_base_de_datos';
export const DB_PORT = 5432;

export const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});