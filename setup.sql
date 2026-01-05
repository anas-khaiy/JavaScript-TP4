CREATE DATABASE IF NOT EXISTS tp4;
USE tp4;

CREATE TABLE IF NOT EXISTS auteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  prenom VARCHAR(100) NOT NULL,
  date_naissance DATE,
  nationalite VARCHAR(50),
  biographie TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS livres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(200) NOT NULL,
  auteur_id INTEGER,
  annee_publication INTEGER,
  genre VARCHAR(50),
  isbn VARCHAR(20) UNIQUE,
  resume TEXT,
  disponible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (auteur_id) REFERENCES auteurs(id) ON DELETE CASCADE
);

INSERT IGNORE INTO auteurs (id, nom, prenom, date_naissance, nationalite, biographie)
VALUES 
  (1, 'Hugo','Victor','1802-02-26','Française','Poète et romancier.'),
  (2, 'Camus','Albert','1913-11-07','Française','Philosophe et écrivain.'),
  (3, 'Rowling','J.K.','1965-07-31','Britannique','Auteure de Harry Potter.');

INSERT IGNORE INTO livres (titre, auteur_id, annee_publication, genre, isbn, resume, disponible)
VALUES
  ('Les Misérables', 1, 1862, 'Historique', '9782253096344', 'Jean Valjean...', true),
  ('L''Étranger', 2, 1942, 'Philosophique', '9782070360024', 'Meursault...', true),
  ('Harry Potter à l''école des sorciers', 3, 1997, 'Fantasy', '9782070643028', 'Aventure...', true);
