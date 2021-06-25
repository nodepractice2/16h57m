-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: root
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eotrmfs`
--

DROP TABLE IF EXISTS `eotrmfs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eotrmfs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `writer` varchar(40) NOT NULL,
  `content` varchar(500) NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `eotrmfs_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eotrmfs`
--

LOCK TABLES `eotrmfs` WRITE;
/*!40000 ALTER TABLE `eotrmfs` DISABLE KEYS */;
INSERT INTO `eotrmfs` VALUES (4,'asd@asd','asd',3),(5,'asd@asd','ㅇㅇㅇㅇㅇ',3),(6,'asd@asd','',3),(7,'asd@asd','',3),(8,'asd@asd','',3),(9,'asd@asd','',3),(10,'asd@asd','',3),(11,'asd@asd','',3),(12,'asd@asd','',3),(13,'asd@asd','',3),(14,'asd@asd','',3),(15,'asd@asd','',3),(16,'asd@asd','',3),(17,'asd@asd','',3),(18,'asd@asd','',3),(19,'asd@asd','',3),(20,'asd@asd','',3),(21,'asd@asd','',3),(22,'asd@asd','',3),(23,'asd@asd','',3),(24,'asd@asd','',3),(25,'asd@asd','',3),(26,'asd@asd','',3),(27,'asd@asd','',3),(28,'asd@asd','',3),(29,'asd@asd','',3),(30,'asd@asd','asd',3),(31,'asd@asd','asd',3),(32,'123','sd',4),(33,'123','asd',3),(34,'123','ddd',4),(35,'123','ddddd',4),(36,'123','asdasd',4),(37,'123','asdasdasdasd',4),(38,'123','s',5),(39,'123','sd',5),(40,'123','dd',5),(41,'123','d',5),(42,'123','ds',5),(43,'123','dsd',5),(44,'123','a',5),(45,'123','d',5),(46,'123','ds',5),(47,'123','dsd',5),(48,'123','s',5),(49,'123','sd',5),(50,'123','sdd',5),(51,'123','sdda',5),(52,'123','d',5),(53,'123','asd',5),(54,'123','asdd',5),(55,'123','asddd',5),(56,'123','sd',5),(57,'123','asd',5),(58,'123','asddd',5),(59,'123','1',6),(60,'123','12',6),(61,'123','1',6),(62,'123','12',6),(63,'123','123',6),(64,'123','14',6),(65,'123','146',6),(66,'123','33',6),(67,'123','3322',6),(68,'123@naver.com','sd',7),(69,'123@naver.com','s',7),(70,'123@naver.com','dfd',7),(71,'123@naver.com','',3),(72,'123@naver.com','d',8),(73,'123@naver.com','k',8),(74,'123@naver.com','ㅁㄴㅇ',6),(75,'123@naver.com','dasadsads',8),(76,'123@naver.com','asd',8),(77,'황예슬','w',8);
/*!40000 ALTER TABLE `eotrmfs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-25 10:38:34
