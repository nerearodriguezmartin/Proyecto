create database sobway;

use sobway;

CREATE TABLE comunidad (
    cod_comunidad INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    ubicacion VARCHAR(50),
    mapa VARCHAR(500)
);
    
  
CREATE TABLE instalacion (
    cod_instalacion INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_comunidad INT,
    hora_apertura TIME,
    hora_cierre TIME,
    aforo INT,
    tipo_instalacion VARCHAR(60),
    nombre VARCHAR(100),
    precio FLOAT,
    persona_ajeno BOOLEAN,
    limpieza INT,
    comunicacion INT,
    ubicacion INT,
    calidad INT,
    img VARCHAR(500),
    img2 VARCHAR(500),
    img3 VARCHAR(500),
    descripcion VARCHAR(500),
    maximo INT,
    FOREIGN KEY (cod_comunidad)
        REFERENCES comunidad (cod_comunidad)
);
    
CREATE TABLE puerta (
    cod_puerta INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_comunidad INT,
    cod_instalacion INT,
    FOREIGN KEY (cod_instalacion)
        REFERENCES instalacion (cod_instalacion),
    FOREIGN KEY (cod_comunidad)
        REFERENCES comunidad (cod_comunidad)
);


CREATE TABLE turno (
    cod_turno INT PRIMARY KEY,
    tramo_horario VARCHAR(50)
);
    
CREATE TABLE turno_instalacion (
    cod_turno INT,
    cod_instalacion INT,
    FOREIGN KEY (cod_instalacion)
        REFERENCES instalacion (cod_instalacion),
    FOREIGN KEY (cod_turno)
        REFERENCES turno (cod_turno),
    PRIMARY KEY (cod_turno , cod_instalacion)
);


CREATE TABLE reserva (
    turno VARCHAR(50),
    cod_instalacion INT,
    cod_reserva INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100),
    total INT,
    num_pases INT,
    pagado BOOLEAN,
    fecha VARCHAR(50),
    img VARCHAR(100),
    nombre varchar(50),
    FOREIGN KEY (cod_instalacion)
        REFERENCES instalacion (cod_instalacion),
    FOREIGN KEY (cod_turno)
        REFERENCES turno (cod_turno)
);

CREATE TABLE likes (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_instalacion INT,
    username VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cod_instalacion)
        REFERENCES instalacion (cod_instalacion)
);
    


    insert into comunidad values (01, 'Comunidad Zaph', 'Barcelona', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11972.759090989113!2d2.158004555548363!3d41.391684906814376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ed494b4161%3A0x40d2782f9e2e4e0f!2sCasa%20Batll%C3%B3!5e0!3m2!1ses!2ses!4v1623059834675!5m2!1ses!2ses");
    insert into comunidad values (02, 'Comunidad Almorade', 'Málaga', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.906760085901!2d-4.493869599999968!3d36.67674280000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fa1876ba30a5%3A0x57b5ad2f47de3e9a!2sAeropuerto%20de%20M%C3%A1laga%20-%20Costa%20del%20Sol!5e0!3m2!1ses!2ses!4v1623060002555!5m2!1ses!2ses");
    insert into comunidad values (03, 'Comunidad Atocha', 'Madrid', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12153.413480178999!2d-3.6861754500000004!3d40.4010219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263d74685c5d%3A0x42e69362679ae93!2sAtocha%2C%20Madrid!5e0!3m2!1ses!2ses!4v1623060182088!5m2!1ses!2ses");
    insert into comunidad values (04, 'Comunidad Dalí', 'Barcelona', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.6397222438122!2d2.1743558!3d41.4036299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sBas%C3%ADlica%20de%20la%20Sagrada%20Fam%C3%ADlia!5e0!3m2!1ses!2ses!4v1623060262634!5m2!1ses!2ses");
    insert into comunidad values (05, 'Comunidad Ametlla', 'Barcelona', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23844.499298636565!2d2.26083935!3d41.665195649999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c42de53a4793%3A0x885d609f71b88699!2sL&#39;Ametlla%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1623060323717!5m2!1ses!2ses");
    insert into comunidad values (06, 'Comunidad La Maquinista', 'Barcelona', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.925276475302!2d2.1984820000000003!3d41.440843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bce983ccc79d%3A0x1bb197f90997cd2c!2sCentro%20Comercial%20La%20Maquinista!5e0!3m2!1ses!2ses!4v1623060383455!5m2!1ses!2ses");
    insert into comunidad values (07, 'Comunidad Sant Cugat', 'Barcelona', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47829.21390971915!2d2.0728813!3d41.47553444999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496c2a6d57035%3A0xb16124d430411319!2sSant%20Cugat%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1623060463700!5m2!1ses!2ses");
    insert into comunidad values (08, 'Comunidad Reina Sofia', 'Madrid', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.064503909529!2d-3.6936494!3d40.4074218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262f4fa38a0d%3A0xa43b01adf9d95733!2sReina%20Sof%C3%ADa!5e0!3m2!1ses!2ses!4v1623060537359!5m2!1ses!2ses");
    insert into comunidad values (09, 'Comunidad Malasaña', 'Madrid', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2525112664584!2d-3.7064183999999996!3d40.425407199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228630af221c9%3A0x56a6a22073976971!2sMalasa%C3%B1a%20Central%20Suites!5e0!3m2!1ses!2ses!4v1623060653836!5m2!1ses!2ses");
    insert into comunidad values (10, 'Comunidad Patio de los Leones', 'Granada', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.9741917147685!2d-3.589238299999999!3d37.1770843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb7b13ef803%3A0x24ac4d9e3d2bee8c!2sPatio%20de%20Los%20Leones!5e0!3m2!1ses!2ses!4v1623060848631!5m2!1ses!2ses");
    insert into comunidad values (11, 'Comunidad El Partal', 'Granada', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.793322612905!2d-3.5899202!3d37.1576136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fca8226a75ed%3A0xcc8457ec2c297f83!2sCalle%20el%20Partal%2C%2018008%20Granada!5e0!3m2!1ses!2ses!4v1623060906476!5m2!1ses!2ses");
    insert into comunidad values (12, 'Comunidad Generalife', 'Granada', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6358.022130961258!2d-3.584025450000009!3d37.176207999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb454ea5243%3A0xed48b6304aadba9!2sGeneralife%2C%20Granada!5e0!3m2!1ses!2ses!4v1623060978614!5m2!1ses!2ses");
    insert into comunidad values (13, 'Comunidad El Bañuelo', 'Granada', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.921587558021!2d-3.5928840000000353!3d37.1783344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb8737f0bdd%3A0x117f53149e16a6f1!2sEl%20Ba%C3%B1uelo!5e0!3m2!1ses!2ses!4v1623061069257!5m2!1ses!2ses");
    insert into comunidad values (14, 'Comunidad Terral', 'Málaga', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.02814011997!2d-4.4169989!3d36.7218854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7eab4ced1d9%3A0x503237c7f1b7ba87!2sTerral!5e0!3m2!1ses!2ses!4v1623061140295!5m2!1ses!2ses");
    insert into comunidad values (15, 'Comunidad Horno de Oro', 'Granada', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.867896177865!2d-3.5896513!3d37.17961029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcc83b1bd6bb%3A0xffd8ddad93c5b026!2sCasa%20%C3%A1rabe%20de%20Horno%20del%20Oro!5e0!3m2!1ses!2ses!4v1623061237778!5m2!1ses!2ses");
    insert into comunidad values (16, 'Comunidad Horno de Oro', 'Granada', "'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.867896177865!2d-3.5896513!3d37.17961029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcc83b1bd6bb%3A0xffd8ddad93c5b026!2sCasa%20%C3%A1rabe%20de%20Horno%20del%20Oro!5e0!3m2!1ses!2ses!4v1623061237778!5m2!1ses!2ses'");


    insert into instalacion values (null, 01, '8:00', '22:00', 50, 'piscina', 'Piscina Zaph', 5, true, 9, 10, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/tessa-braddy-LIbeeXSFYRY-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sophie-van-luvanee-3v8tZItxxbM-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/james-wheeler-0vysUcbfYx4-unsplash.jpg', 'Piscina de agua salada, amplia para pasar un rato agradable con familia o amigos, sin descuidar el PH de la piel', 5);
    insert into instalacion values (null, 01, '8:00', '22:00', 15, 'sala de reuniones', 'Sala de Reuniones Zaph', 90, true, 10, 10, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/danielle-cerullo-bIZJRVBLfOM-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/benjamin-child-GWe0dlVD9e0-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/nastuh-abootalebi-J1rNS2qv8BQ-unsplash.jpg', 'El lugar perfecto para cualquier reunión importante. Paredes insonorizadas y perfecta iluminación para una óptima comodidad. Cuenta con material de oficina', 3);
    insert into instalacion values (null, 01, '8:00', '22:00', 30, 'gimnasio', 'Gimnasio Zaph', 4, true, 10, 8, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/humphrey-muleba-dDp-6pXrYik-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/katerina-jerabkova-nV7WA07ikI4-unsplash.jpg', 'Gimnasio con las máquinas de última generación para potenciar tus entrenamientos', 5);
    insert into instalacion values (null, 01, '8:00', '22:00', 4, 'pista deportiva', 'Pista de tenis Zaph', 20, true, 9, 9, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/imagenes/pista-de-tenis-hormigon.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/gilda-gonzalez-BA5OQErJ7QE-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/victor-magese-3AxhtVfEXGI-unsplash.jpg', 'Pista de tenis de hormigón para divertirte con amigos mientras haces deporte', 1);
    insert into instalacion values (null, 16, '8:00', '22:00', 4, 'pista deportiva', 'Pista de tenis Zaph', 20, true, 9, 9, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/imagenes/pista-de-tenis-hormigon.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/gilda-gonzalez-BA5OQErJ7QE-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/victor-magese-3AxhtVfEXGI-unsplash.jpg', 'Pista de tenis de hormigón para divertirte con amigos mientras haces deporte', 1);

    insert into instalacion values (null, 02, '10:00', '20:00', 40, 'piscina', 'Piscina Almorade', 4, true, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/tessa-braddy-LIbeeXSFYRY-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sophie-van-luvanee-3v8tZItxxbM-unsplash.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/james-wheeler-0vysUcbfYx4-unsplash.jpg', 'Piscina de agua salada, amplia para pasar un rato agradable con familia o amigos, sin descuidar el PH de la piel');

    insert into turno values (01, '8:00-9:00');
    insert into turno values (02, '9:00-10:00');
    insert into turno values (03, '10:00-11:00');
    insert into turno values (04, '12:00-13:00');
    insert into turno values (05, '13:00-14:00');
    insert into turno values (06, '14:00-15:00');
    insert into turno values (07, '15:00-16:00');
    insert into turno values (08, '16:00-17:00');
    insert into turno values (09, '17:00-18:00');
    insert into turno values (10, '18:00-19:00');
    insert into turno values (11, '19:00-20:00');
    insert into turno values (12, '20:00-21:00');
    insert into turno values (13, '21:00-22:00');
    insert into turno values (14, '8:00-14:00');
    insert into turno values (15, '14:00-22:00');



    insert into turno values (16, '10:00-19:00');
    insert into turno values (17, '9:00-18:00');
    insert into turno values (18, '10:00-20:00');
    insert into turno values (19, '12:00-20:00');
    insert into turno values (20, '11:00-19:00');
    insert into turno values (21, '9:00-22:00');
    insert into turno values (22, '12:00-18:00');
    insert into turno values (23, '8:00-20:00');
    insert into turno values (24, '11:00-20:00');
    insert into turno values (25, '9:00-21:00');




    //
    insert into turno values (26, '9:00-19:00');
    insert into turno values (27, '7:00-23:00');
    insert into turno values (28, '10:00-22:00');
    insert into turno values (29, '12:00-17:00');


    insert into turno_instalacion values (16, 15);
    insert into turno_instalacion values (17, 16);
    insert into turno_instalacion values (18, 17);
    insert into turno_instalacion values (19, 18);
    insert into turno_instalacion values (20, 19);
    insert into turno_instalacion values (21, 20);
    insert into turno_instalacion values (22, 21);
    insert into turno_instalacion values (22, 22);
    insert into turno_instalacion values (18, 23);
    insert into turno_instalacion values (23, 24);
    insert into turno_instalacion values (16, 25);
    insert into turno_instalacion values (24, 26);
    insert into turno_instalacion values (25, 27);
    insert into turno_instalacion values (20, 28);

    insert into turno_instalacion values (26, 6);
    insert into turno_instalacion values (27, 7);
    insert into turno_instalacion values (24, 8);
    insert into turno_instalacion values (23, 9);
    insert into turno_instalacion values (18, 10);
    insert into turno_instalacion values (19, 11);
    insert into turno_instalacion values (28, 12);
    insert into turno_instalacion values (19, 13);
    insert into turno_instalacion values (29, 14);


    insert into turno_instalacion values (14, 1);
    insert into turno_instalacion values (15, 1);
    insert into turno_instalacion values (14, 2);
    insert into turno_instalacion values (15, 2);
    insert into turno_instalacion values (14, 3);
    insert into turno_instalacion values (15, 3);
    insert into turno_instalacion values (14, 4);
    insert into turno_instalacion values (15, 4);


    insert into turno_instalacion values (13, 3);
    insert into turno_instalacion values (12, 3);
    insert into turno_instalacion values (11, 3);
    insert into turno_instalacion values (10, 3);
    insert into turno_instalacion values (9, 3);
    insert into turno_instalacion values (8, 3);
    insert into turno_instalacion values (7, 3);
    insert into turno_instalacion values (6, 3);
    insert into turno_instalacion values (5, 3);
    insert into turno_instalacion values (4, 3);
    insert into turno_instalacion values (3, 3);
    insert into turno_instalacion values (2, 3);
    insert into turno_instalacion values (1, 3);
    insert into turno_instalacion values (1, 4);
    insert into turno_instalacion values (2, 4);
    insert into turno_instalacion values (3, 4);
    insert into turno_instalacion values (4, 4);
    insert into turno_instalacion values (5, 4);
    insert into turno_instalacion values (6, 4);
    insert into turno_instalacion values (7, 4);
    insert into turno_instalacion values (8, 4);
    insert into turno_instalacion values (9, 4);
    insert into turno_instalacion values (10, 4);
    insert into turno_instalacion values (11, 4);
    insert into turno_instalacion values (12, 4);
    insert into turno_instalacion values (13, 4);


    insert into reserva values (14, 1, null, 'nerearodrimar2001@gmail.com', 40, 2); 


insert into instalacion values (null, 02, '09:00', '19:00', 40, 'piscina', 'Piscina Almorade', 5, true, 8, 9, 7, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade/almorade.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade/almorade+2.jpg',  'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade/almorade+3.jpg', 'Le recomendamos que venga a nuestra piscina para pasar un buen día junto a sus seres queridos, consta de diferentes chorros con una fuerza variable para que además de estar rodeado de los suyos pueda hacerlo en un ambiente de relax', 5);
insert into instalacion values (null, 02, '07:00', '23:00', 60, 'gimnasio', 'Gimnasio Almorade', 7, true, 9, 8, 10, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+gym/117110962.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+gym/117110966.jpg',  'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+gym/182838801.jpg', 'Nuestro gimnasio consta con las últimas novedades del mercado fitness, donde podrás entrenar cualquier grupo muscular. Ven a pasar un rato que tu cuerpo y salud te agradecerán', 5);
insert into instalacion values (null, 02, '11:00', '20:00', 20, 'spa', 'Spa Almorade', 10, true, 10, 7, 8, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+spa/117110796.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+spa/117110812.jpg',  'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/almorade+spa/182732495.jpg', 'El Spa Almorade tiene una sauna, una sala de masajes y baños turcos, unas instalaciones ideales para que puedas pasar un día estupendo relajándote y mimando tu cuerpo', 5);

insert into instalacion values (null, 03, '08:00', '20:00', 70, 'gimnasio', 'Gimnasio Atocha', 15, true, 10, 7, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+GYM/133510270.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+GYM/133510275.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+GYM/133510279.jpg', 'En la comunidad Atocha contamos con muchas facilidades para los propietarios de forma que puedan mantenerse en buena forma física y disfruten de tiempo de calidad en sus días de descanso, ahora hemos dado un paso más allá y queremos atraer a otras personas ajenas a la comunidad a nuestras instalaciones, así que no seas tímido y ven a disfrutar de un buen día con tus familiares o amigos a nuestro gimnasio dotado con las últimas tecnologías en cuanto al fitness', 5);
insert into instalacion values (null, 03, '10:00', '21:00', 50, 'piscina', 'Piscina Atocha', 5, true, 9, 8, 9, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+PISINA/219692345.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+PISINA/219692351.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+PISINA/200832933+x3.jpg', 'La piscina de la Comunidad Atocha es un buen lugar para pasar un buen rato con tus amigos y familia ya que cuenta también con un espacio de chill out con tumbonas, palmeras…, no te lo pienses y ven a disfrutar', 5);
insert into instalacion values (null, 03, '12:00', '20:00', 20, 'sala de reuniones', 'Sala de Reuniones Atocha', 25, true, 10, 9, 7, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+REUNIONES/133510298.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+REUNIONES/133510302.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ATOCHA+REUNIONES/210214117+x3.jpg', 'En nuestra comunidad contamos con una sala de reuniones altamente equipada de sillones cómodos, mesa de reuniones, WiFi gratis y pantallas, así que quien quiera hacer uso de esta sala con fines comerciales, como reuniones de negocios, tendrá a su disposición todo este material necesario', 5);


insert into instalacion values (null, 04, '10:00', '22:00', 80, 'sala de reuniones', 'Sala de Reuniones Dalí', 40, true, 9, 10, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/DALI+REUNIONES/114292794.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/DALI+REUNIONES/114292822.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/DALI+REUNIONES/40796191.jpg', 'La comunidad Dalí ofrece esta cómoda sala de reuniones con todas las necesidades que puedan surgir a tus clientes cubiertas. Ven y visita las instalaciones, seguro que tus negocios acaban exitosos', 5);

insert into instalacion values (null, 04, '12:00', '20:00', 50, 'piscina', 'Piscina Dalí', 6, true, 8, 9, 8, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/Dali+piscina/151965924.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/Dali+piscina/151965936.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/Dali+piscina/184308666.jpg', 'Nuestra piscina Dalí ofrece los mejores servicios para que pases un día relajado con tus amigos, además contamos con una barra libre donde podrás adquirir bebidas o picoteo', 5);

insert into instalacion values (null, 04, '12:00', '17:00', 10, 'solarium', 'Solárium Dalí', 4, true, 9, 10, 7, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/dali+solarium/68366830.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/dali+solarium/68366836.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/69350521+x3.jpg', 'Ven a conseguir tu mejor bronceado a nuestro solárium, equipado de cómodas tumbonas y duchas para refrescarte', 5);
insert into instalacion values (null, 05, '10:00', '19:00', 25, 'piscina', 'Piscina Ametlla', 7, true, 8, 9, 10, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ametlla+piscina/98984437.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ametlla+piscina/98984442.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/ametlla+piscina/98984447.jpg', 'Nuestra piscina, rodeada de cómodas tumbonas y en una plataforma elevada es un plan ideal para venir el día de la semana que quieras y disfrutar rodeado de los que más quieres', 5);

insert into instalacion values (null, 05, '09:00', '18:00', 50, 'biblioteca', 'Biblioteca Ametlla', 3, true, 8, 9, 10, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/biblioteca+ametlla/220084125.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/biblioteca+ametlla/251622361.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/biblioteca+ametlla/251622395.jpg', 'Planteamos un plan fuera de lo común, en nuestra comunidad de vecinos, estamos muy concienciados con la cultura desde la más tierna edad, así que no dudamos en incluir un espacio de silencio y relax para disfrutar de un buen libro en nuestro edificio. Ahora queremos abrirlo al público para que disfruten junto a nosotros de esta pasión', 5);

insert into instalacion values (null, 05, '10:00', '20:00', 65, 'sala de reuniones', 'Sala de Reuniones Ametlla', 85, true, 9, 8, 7, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+de+reuniones+ametlla/263962660.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+de+reuniones+ametlla/263962662.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+de+reuniones+ametlla/263962665.jpg', 'Ofrecemos a cualquier particular o empresario la posibilidad de utilizar nuestra sala de reuniones en el horario que necesite, cuenta con una buena ventilación, localización y sistema audio-visual', 5);

insert into instalacion values (null, 06, '12:00', '20:00', 15, 'spa', 'Spa La Maquinista', 35, true, 9, 10, 10, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+la+maquinista/202354956.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+la+maquinista/202355043.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+la+maquinista/202355056.jpg', 'Ven a relajarte de tu ajetreado día a día en nuestro spa, dotado de sala de masajes, jacuzzi y chorros hidromasaje', 5);

insert into instalacion values (null, 07, '11:00', '19:00', 10, 'spa', 'Spa Sant Cugat', 30, true, 8, 9, 8, 7, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SANT+CUGAT+SPA/115881861.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SANT+CUGAT+SPA/115882526.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SANT+CUGAT+SPA/115883207.jpg', 'Nuestro spa, con una amplia piscina climatizada, a distintos niveles y chorros para que te relajes y disfrutes', 5);

insert into instalacion values (null, 08, '09:00', '22:00', 50, 'gimnasio', 'Gimnasio Reina Sofía', 15, true, 9, 10, 10, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/gym+reina+sofia/34949553.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/gym+reina+sofia/34949623.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/gym+reina+sofia/34949730.jpg', 'Ven a entrenar y a ponerte en buena forma física a nuestro gimnasio, con instalaciones a la última y las mejores novedades del mercado', 5);

insert into instalacion values (null, 09, '12:00', '18:00', 20, 'spa', 'Spa Malasaña', 20, true, 8, 7, 8, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+MALASA%C3%91A/249517534.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+MALASA%C3%91A/249517539.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+MALASA%C3%91A/7752519.jpg', '¿Quieres pasar un día de relax en un ambiente tranquilo, alejado del estrés de la ciudad? Ven a visitarnos y a pasar un día relajante al spa de nuestra comunidad', 5);

insert into instalacion values (null, 10, '12:00', '18:00', 20, 'spa', 'Spa Patio de los Leones', 12, true, 10, 9, 9, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+patio+de+los+leones/134303340.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+patio+de+los+leones/134303354.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+patio+de+los+leones/134303376.jpg', 'Ven al spa de nuestra comunidad para pasar un día relajante y acompañado de alguien a quien quieres', 5);

insert into instalacion values (null, 10, '10:00', '20:00', 45, 'piscina', 'Piscina Patio de los Leones', 7, true, 8, 9, 10, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+patio+de+los+leones/142797722.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+patio+de+los+leones/142797742.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+patio+de+los+leones/142797760.jpg', 'Para apaciguar los días de calor ven a refrescarte a nuestra piscina, situada en una terraza, con unas vistas maravillosas a Granada, la Ciudad de la Alhambra', 5);

insert into instalacion values (null, 11, '08:00', '20:00', 50, 'gimnasio', 'Gimnasio Partal', 12, true, 9, 7, 6, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PARTAL+GYM/157511813.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PARTAL+GYM/157511817.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PARTAL+GYM/157511823.jpg', 'Ven a nuestro gimnasio equipado de pesas de todos los rangos y máquinas, donde podrás trabajar todos los grupos musculares', 5);

insert into instalacion values (null, 12, '10:00', '19:00', 10, 'spa', 'Spa Generalife', 18, true, 9, 7, 7, 9, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+generalife/18317136.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+generalife/8832495.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/spa+generalife/8833192.jpg', 'Nuestro Spa, inspirado en los hammanes árabes, tiene una gran influencia marroquí con su zellige. Tiene un jacuzzi de aguas termales y distintos chorros a presión', 5);

insert into instalacion values (null, 13, '11:00', '20:00', 20, 'spa', 'Spa Bañuelo', 22, true, 10, 10, 8, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+BA%C3%91UELO/208560528.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+BA%C3%91UELO/208560539.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/SPA+BA%C3%91UELO/28546958.jpg', 'Podrás disfrutar de un maravilloso día relajando tus músculos de tanto estrés con nuestras piscinas de diferentes temperaturas, baños turcos, etc.', 5);

insert into instalacion values (null, 14, '09:00', '21:00', 30, 'sala de reuniones', 'Sala de Reuniones Terral', 50, true, 8, 6, 9, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+reuniones+terral/15640173.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+reuniones+terral/16643883.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/sala+reuniones+terral/58209703.jpg', 'No dudes en contar con nuestra sala de reuniones para reunirte con tus clientes y tus presentaciones de marketing tendrán éxito asegurado', 5);

insert into instalacion values (null, 14, '11:00', '19:00', 60, 'piscina', 'Piscina Terral', 8, true, 9, 8, 9, 10, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+terral/128229568.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+terral/128229594.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/piscina+terral/166626078.jpg', 'Nuestra piscina climatizada podrás disfrutarla tanto en verano como en invierno, ven a pasar un rato refrescante en la piscina de nuestra comunidad', 5);

insert into instalacion values (null, 15, '10:00', '80:00', 35, 'piscina', 'Piscina Horno de Oro', 5, true, 8, 7, 6, 8, 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PISCINA+HORNO+DE+ORO/143364459.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PISCINA+HORNO+DE+ORO/143364461.jpg', 'https://sobway.s3.eu-west-3.amazonaws.com/instalaciones/PISCINA+HORNO+DE+ORO/85760372.jpg', 'La piscina de nuestra comunidad está situada en una terraza, por lo que mientras disfrutas de un baño refrescante, disfrutarás de unas vistas inigualables', 5);