--Base de datos para reserva de lugares

CREATE TABLE Cities (
    id serial NOT NULL,
    names text NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Users (
    id serial NOT NULL,
    email text NOT NULL,
    passwords text NOT NULL,
    names text NOT NULL,
    las_name text NOT NULL,
    is_admin BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    city int FOREIGN KEY (id) REFERENCES Cities(id);
    --city int REFERENCES Cities(id);
);

CREATE TABLE Institutions (
    id serial NOT NULL,
    names text NOT NULL,
    PRIMARY KEY (id),
    city int FOREIGN KEY (id) REFERENCES Cities(id);
    --city int REFERENCES Cities(id);
);

CREATE TABLE Zones (
    id serial NOT NULL,
    names text NOT NULL,
    PRIMARY KEY (id),
    institution int FOREIGN KEY (id) REFERENCES Institutions(id);
    --institution int REFERENCES Institutions(id);
);

CREATE TABLE Places (
    id serial NOT NULL,
    code text NOT NULL,
    ability integer NOT NULL,
    counts INTEGER NOT NULL,
    PRIMARY KEY (id),
    zones int FOREIGN KEY (id) REFERENCES Zones(id);
    --zone int REFERENCES Zones(id);
);

CREATE TABLE Bookings (
    id serial NOT NULL,
    dates date NOT NULL,
    timess TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    place int FOREIGN KEY (id) REFERENCES Places(id);
    --place int REFERENCES Places(id);
    user int FOREIGN KEY (id) REFERENCES Users(id);
    --user int REFERENCES Users(id);
);