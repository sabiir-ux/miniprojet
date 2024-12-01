USE cabinet;

CREATE TABLE patients (
    id_patient INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cin VARCHAR(20) NOT NULL UNIQUE,
    adresse VARCHAR(255) NOT NULL,
    sexe ENUM('Homme', 'Femme') NOT NULL
);

CREATE TABLE consultations (
    consultation_id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    consultation_date DATE NOT NULL,
    symptoms TEXT NOT NULL,
    diagnosis TEXT NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES patients(id_patient) ON DELETE CASCADE
);

CREATE TABLE ordonnances (
    id_ordonnance INT AUTO_INCREMENT PRIMARY KEY,
    nom_patient VARCHAR(255) NOT NULL,
    cin_patient VARCHAR(20) NOT NULL UNIQUE,
    etat_sante TEXT NOT NULL,
    medicaments TEXT NOT NULL,
    conseils TEXT NOT NULL,
    date_ordonnance DATE NOT NULL
);


CREATE TABLE certificats (
    id_certificat INT AUTO_INCREMENT PRIMARY KEY,
    consultation_id INT NOT NULL,
    motif_certificat VARCHAR(255),
    date_certificat DATE NOT NULL,
    FOREIGN KEY (consultation_id) REFERENCES consultations(consultation_id) ON DELETE CASCADE
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consultation_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    paid_amount DECIMAL(10, 2) NOT NULL,
    remaining_amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    FOREIGN KEY (consultation_id) REFERENCES consultations(consultation_id) ON DELETE CASCADE
);

CREATE TABLE rendez_vous (
    id_rdv INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES patients(id_patient) ON DELETE CASCADE,
    UNIQUE (appointment_date, appointment_time)
);

CREATE TABLE secretaire (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE medecin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

