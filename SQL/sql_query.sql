use clientportfolio;
select * from clients;
select * from meetings;

-- Create table meetings 
CREATE TABLE `meetings` (
  `M_id` int NOT NULL AUTO_INCREMENT,
  `Meeting_Topic` varchar(500) DEFAULT NULL,
  `NO_of_people` int DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  PRIMARY KEY (`M_id`)
);
-- Create Table Clients
CREATE TABLE `clients` (
  `C_id` int NOT NULL AUTO_INCREMENT,
  `C_name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `C_address` varchar(500) DEFAULT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`C_id`)
);
