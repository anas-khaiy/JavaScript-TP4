import { query } from '../config/db.js';

export const LivreModel = {
    getAll: () => query(
        `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
     FROM livres l JOIN auteurs a ON l.auteur_id=a.id ORDER BY l.titre`
    ),
    getById: id => query(
        `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
     FROM livres l JOIN auteurs a ON l.auteur_id=a.id WHERE l.id=?`,
        [id]
    ),
    create: d => query(
        `INSERT INTO livres (titre, auteur_id, annee_publication, genre, isbn, resume, disponible)
     VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [d.titre, d.auteur_id, d.annee_publication, d.genre, d.isbn, d.resume, d.disponible !== undefined ? d.disponible : true]
    ),
    update: (id, d) => query(
        `UPDATE livres SET titre=?, auteur_id=?, annee_publication=?, genre=?, 
     isbn=?, resume=?, disponible=? WHERE id=?`,
        [d.titre, d.auteur_id, d.annee_publication, d.genre, d.isbn, d.resume, d.disponible, id]
    ),
    delete: id => query('DELETE FROM livres WHERE id=?', [id]),
    search: term => query(
        `SELECT l.*, a.nom AS auteur_nom, a.prenom AS auteur_prenom
     FROM livres l JOIN auteurs a ON l.auteur_id=a.id
     WHERE l.titre LIKE ? OR a.nom LIKE ? OR a.prenom LIKE ? OR l.genre LIKE ?
     ORDER BY l.titre`,
        [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`]
    )
};
