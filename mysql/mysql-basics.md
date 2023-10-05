# MySQL Basics

**Log in**

```sh
$ mysql -u root -p
```

**Create database**

```mysql
mysql> CREATE DATABASE db_name;
```

**Add user**

```mysql
mysql> CREATE USER 'dbran'@'localhost' IDENTIFIED BY 'password';
```

**Grant user permissions**

```mysql
mysql> GRANT ALL PRIVILEGES ON api_db.* TO 'dbran'@'localhost;
```

**Exit**

```mysql
mysql> exit;
```

**Check if user has been added successfully**

```sh
$ mysql -u dbran -p
```

**Select database**

```mysql
mysql> use api_db;
```

**Create table**

```mysql
mysql> CREATE TABLE task (
    -> id INT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(128) NOT NULL,
    -> priority INT DEFAULT NULL,
    -> is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    -> PRIMARY KEY (id),
    -> INDEX (name)
    -> );
Query OK, 0 rows affected (0,04 sec)
```
**View table**

 ```mysql
 mysql> DESCRIBE task;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int          | NO   | PRI | NULL    | auto_increment |
| name         | varchar(128) | NO   | MUL | NULL    |                |
| priority     | int          | YES  |     | NULL    |                |
| is_completed | tinyint(1)   | NO   |     | 0       |                |
+--------------+--------------+------+-----+---------+----------------+
4 rows in set (0,00 sec)
```

**View indexes from table**

```mysql
mysql> SHOW INDEXES FROM task;
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| task  |          0 | PRIMARY  |            1 | id          | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |
| task  |          1 | name     |            1 | name        | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
2 rows in set (0,01 sec)
```

**Add records to table**

```mysql
mysql> use api_db;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> INSERT INTO task (name, priority, is_completed) VALUES
    -> ('Buy new shoes', 1, true),
    -> ('Renew passport', 2, false),
    -> ('Paint wall', NULL, true);
Query OK, 3 rows affected (0,01 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

**View records**

```mysql
mysql> SELECT * FROM task;
+----+----------------+----------+--------------+
| id | name           | priority | is_completed |
+----+----------------+----------+--------------+
|  1 | Buy new shoes  |        1 |            1 |
|  2 | Renew passport |        2 |            0 |
|  3 | Paint wall     |     NULL |            1 |
+----+----------------+----------+--------------+
3 rows in set (0,00 sec)
```

**Select specific rows**

```mysql
mysql> SELECT * FROM task WHERE id IN (4, 5);
+----+------------+----------+--------------+
| id | name       | priority | is_completed |
+----+------------+----------+--------------+
|  4 | A new task |        3 |            1 |
|  5 | Learn API  |        2 |            0 |
+----+------------+----------+--------------+
2 rows in set (0,00 sec)
```
