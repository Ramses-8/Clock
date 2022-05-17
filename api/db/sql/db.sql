CREATE DATABASE cities_db;

CREATE TABLE cities(
    city_id serial NOT NULL,
    city_name varchar(50) NOT NULL,
    continent varchar(50) NOT NULL,
    PRIMARY KEY(city_id)    
);

CREATE TABLE timezones(
    timezone_id serial NOT NULL,
    timezone varchar(10) NOT NULL,
    city_id integer NOT NULL,
    PRIMARY KEY(timezone_id),
    CONSTRAINT fk_cities__city_id FOREIGN KEY (city_id) REFERENCES cities(city_id)
);
