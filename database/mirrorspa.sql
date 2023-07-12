-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 09:17 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mirrorspa`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contactid` int(255) NOT NULL,
  `contactName` text NOT NULL,
  `contactEmail` text NOT NULL,
  `contactPhone` text NOT NULL,
  `contactMessage` text NOT NULL,
  `contactTime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contactid`, `contactName`, `contactEmail`, `contactPhone`, `contactMessage`, `contactTime`) VALUES
(7, 'baju', 'baju@gmail.com', '9999999999', 'hi now this', '2023-07-06 16:00:21'),
(8, 'vikas kumar', 'vikas@gmail.com', '8899118822', 'hi', '2023-07-07 16:30:46'),
(9, 'mansingh', 'mansingh@gmail.com', '9981773388', 'vikas kumar', '2023-07-07 16:31:19'),
(10, 'mahek', 'mahek@gmail.com', '9998278877', 'this is the mahek', '2023-07-07 16:36:23'),
(11, 'aditya', 'aditya@gmail.com', '9988227744', '', '2023-07-07 16:36:39'),
(12, 'sanjay', 'sanjay@gmail.com', '8822993388', '', '2023-07-07 16:36:56'),
(13, 'mukesh', 'mukesh@gmail.com', '7788990033', '', '2023-07-07 16:37:15'),
(14, 'deepak', 'deepak@gmail.com', '8899118833', '', '2023-07-07 16:37:31'),
(15, 'sonam', 'sonam@gmail.com', '8877227733', '', '2023-07-07 16:37:49'),
(16, 'karan', 'karan@gmail.com', '8899228833', '', '2023-07-07 16:38:21'),
(17, 'address', 'address@gmail.com', '8822773398', 'this is the address', '2023-07-07 16:39:58'),
(18, 'room', 'room@gmail.com', '8822881100', '', '2023-07-07 16:40:39'),
(19, 'monu', 'monukumar@gmail.com', '8888899999', '', '2023-07-07 18:09:54'),
(20, 'gulshan', 'gulshan@gmail.com', '9999922222', 'this gulshan', '2023-07-07 18:10:16'),
(21, 'vikas', 'vikas@gmail.ccom', '8899889098', '--Blank--', '2023-07-07 18:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `inquiryid` int(255) NOT NULL,
  `inquiryName` text NOT NULL,
  `InquiryPhone` text NOT NULL,
  `inquiryTime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inquiry`
--

INSERT INTO `inquiry` (`inquiryid`, `inquiryName`, `InquiryPhone`, `inquiryTime`) VALUES
(13, 'Dhananjay Gupta', '8368692759', '2023-07-06 14:40:21'),
(14, 'Vinay Kumar', '8899118833', '2023-07-06 14:41:32'),
(15, 'Sandeep Prajapati', '9900119922', '2023-07-06 14:42:20'),
(16, 'asf', '9232323232', '2023-07-06 14:45:51'),
(18, 'monue', '9999999999', '2023-07-06 15:35:42'),
(20, 'Pawan', '8899778866', '2023-07-07 13:49:14'),
(21, 'Vinay', '9292883388', '2023-07-07 13:49:25'),
(22, 'Vinay', '8299887722', '2023-07-07 13:50:07'),
(23, 'vinay kumar', '8819978278', '2023-07-07 13:51:50'),
(24, 'mukesh', '8923892388', '2023-07-07 13:52:02'),
(25, 'mehak', '8822774488', '2023-07-07 13:52:15'),
(26, 'mansingh', '8877665544', '2023-07-07 16:18:43'),
(27, 'Naman Singh', '8912781245', '2023-07-07 16:25:00');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewID` int(11) NOT NULL,
  `customerName` text NOT NULL,
  `customerDesc` text NOT NULL,
  `customerImg` text NOT NULL,
  `customerStar` text NOT NULL,
  `reviewTiming` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`reviewID`, `customerName`, `customerDesc`, `customerImg`, `customerStar`, `reviewTiming`) VALUES
(1, 'asdf', 'asdf', '1.png', '2', '12, Jul 2023'),
(2, 'Dhananjay Gupta', 'This spa is awesome', '1.png', '1', '12, Jul 2023');

-- --------------------------------------------------------

--
-- Table structure for table `seo`
--

CREATE TABLE `seo` (
  `seoid` int(255) NOT NULL,
  `seoPage` text NOT NULL,
  `title` text NOT NULL,
  `keywords` text NOT NULL,
  `author` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seo`
--

INSERT INTO `seo` (`seoid`, `seoPage`, `title`, `keywords`, `author`) VALUES
(1, 'Home', 'Now vkas', 'Home keywords Sandeep', 'xtar dhananjay'),
(2, 'About', 'About Title', 'About keywords', 'xtar dhananjay'),
(3, 'Service', 'Service Title', 'Serivce keywords', 'xtar dhananjay'),
(4, 'Contact', 'mirror Title', 'Contact keywords asd', 'Ajay'),
(5, 'RoomThemes', 'Room Themes Title adsgag', 'Room Themes keywords', 'xtar dhananjay');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `serviceid` int(11) NOT NULL,
  `serviceName` text NOT NULL,
  `oldPrice` text NOT NULL,
  `newPrice` text NOT NULL,
  `desc` text NOT NULL,
  `benefits` text NOT NULL,
  `serviceImage` text NOT NULL,
  `permalink` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`serviceid`, `serviceName`, `oldPrice`, `newPrice`, `desc`, `benefits`, `serviceImage`, `permalink`) VALUES
(9, 'mirror spa massage', '400', '100', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'karan, mukesh, vikas, naman, sandeep, deep, deepak', '20230711080947_e9306b19.jpg', 'mirror-spa-massage'),
(11, 'mirror spa', '400', '399', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is a', 'neha, muskan, ruby, sheetal, dipika', '20230711091715_71a5bec1.jpg', 'this-is-the-best-spa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contactid`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`inquiryid`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewID`);

--
-- Indexes for table `seo`
--
ALTER TABLE `seo`
  ADD PRIMARY KEY (`seoid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`serviceid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contactid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `inquiryid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `seo`
--
ALTER TABLE `seo`
  MODIFY `seoid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `serviceid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
