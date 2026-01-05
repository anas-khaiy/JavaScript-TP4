import { query } from '../config/db.js';

export const AuteurModel = {
    getAll: () => query('SELECT * FROM auteurs ORDER BY nom, prenom'),
    getById: id => query('SELECT * FROM auteurs WHERE id=?', [id]),
    create: d => query(
        `INSERT INTO auteurs (nom, prenom, date_naissance, nationalite, biographie)
     VALUES(?, ?, ?, ?, ?)`,
        [d.nom, d.prenom, d.date_naissance || null, d.nationalite, d.biographie]
    ),
    update: (id, d) => query(
        `UPDATE auteurs SET nom=?, prenom=?, date_naissance=?, 
     nationalite=?, biographie=? WHERE id=?`,
        [d.nom, d.prenom, d.date_naissance || null, d.nationalite, d.biographie, id]
    ),
    delete: id => query('DELETE FROM auteurs WHERE id=?', [id]),
    getLivres: id => query('SELECT * FROM livres WHERE auteur_id=? ORDER BY titre', [id])
};
