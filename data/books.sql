CREATE TABLE book (
bookID INT(6) AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
author VARCHAR(30) NOT NULL,
year_pub VARCHAR(50),
publisher VARCHAR(50),
pg_count INT,
msrp VARCHAR(50)
);

insert into book (title, author, year_pub, publisher, pg_count, msrp) values ('Harry P', 'JK Rowling', '1980', 'Bond Inc', 1500, '50');
insert into book (title, author, year_pub, publisher, pg_count, msrp) values ('Katey', 'Abbis', '1800', "Real Corp.", 1600, '29');
insert into book (title, author, year_pub, publisher, pg_count, msrp) values ('Rubia', 'Waith', '1999', 'Three Inc', 249, '20');
insert into book (title, author, year_pub, publisher, pg_count, msrp) values ('Jody', 'Pawlik', '1988', 'Four Corp.', 310, '21');
insert into book (title, author, year_pub, publisher, pg_count, msrp) values ('Test', 'Test', 'Test', 'Test', 1, 'Test');