
CREATE TABLE `meetings` (
  `MeetingTopic` varchar(500),
  `NOofpeople` int,
  `starttime` datetime
  );
-- Create Table Clients
CREATE TABLE `clients` (
  `name` varchar(250),
  `email` varchar(250),
  `address` varchar(500),
  `password` varchar(500) NOT NULL
);



select * from clients;
select * from meetings;