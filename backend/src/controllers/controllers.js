import { pool } from '../config.js';

export const getUsuarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUsuarioById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createUsuario = async (req, res) => {
    const { nombre, teléfono } = req.body;
    try {
        const result = await pool.query('INSERT INTO usuario (nombre, teléfono) VALUES ($1, $2) RETURNING *', [nombre, teléfono]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, teléfono } = req.body;
    try {
        const result = await pool.query('UPDATE usuario SET nombre = $1, teléfono = $2 WHERE id = $3 RETURNING *', [nombre, teléfono, id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};