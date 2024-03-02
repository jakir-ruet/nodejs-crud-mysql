#### CRUD Nodejs and Mysql

Create MySQL database
```bash
CREATE DATABASE DATABASE_NAME;
USE DATABASE_NAME;
```
```bash
CREATE TABLE customer (
  id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  address VARCHAR(85) NOT NULL,
  phone VARCHAR(20)
);
```
```bash
SHOW tables;
```

Run the application
```bash
yarn install
yarn start
```
