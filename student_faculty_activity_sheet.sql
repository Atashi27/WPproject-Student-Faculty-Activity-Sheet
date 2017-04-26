-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2017 at 04:57 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_faculty_activity_sheet`
--

-- --------------------------------------------------------

--
-- Table structure for table `link_project_student`
--

CREATE TABLE `link_project_student` (
  `project_id` varchar(10) NOT NULL,
  `student_id` varchar(15) NOT NULL,
  `role` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `link_project_student`
--

INSERT INTO `link_project_student` (`project_id`, `student_id`, `role`) VALUES
('ITp1', '2016139875', 'Coordinator'),
('ITp1', '2016135555', 'Resource manager'),
('ITp1', '2016138975', 'Back end developer'),
('ITp1', '2016134587', 'Database manager'),
('ITp1', '2016134020', 'Front end developer');

-- --------------------------------------------------------

--
-- Table structure for table `project_details`
--

CREATE TABLE `project_details` (
  `title` varchar(50) NOT NULL,
  `faculty_name` varchar(20) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `no_of_students` tinyint(30) UNSIGNED NOT NULL,
  `project_id` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_details`
--

INSERT INTO `project_details` (`title`, `faculty_name`, `start_date`, `end_date`, `no_of_students`, `project_id`) VALUES
('Web Portal for handicaped', 'Janhavi Baikerikar', '2017-04-26', '2017-07-31', 5, '3');

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `name` varchar(30) NOT NULL,
  `dept` varchar(10) NOT NULL,
  `class` varchar(10) NOT NULL,
  `email_id` varchar(30) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `student_id` varchar(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`name`, `dept`, `class`, `email_id`, `contact`, `student_id`) VALUES
('Rakesh Mishra', 'IT', 'FE', 'rakesh.mishra@gmail.com', '9666666666', '2016135555'),
('Sachin Pandit', 'IT', 'FE', 'sachin.pandit@gmail.com', '9555555555', '2016139875'),
('Abhishek Mathur', 'IT', 'FE', 'abhishek.mathur@gmail.com', '9777777777', '2016138975'),
('Sahil Sharma', 'IT', 'FE', 'sahil.sharma@gmail.com', '9888888888', '2016134587'),
('Rohit Varma', 'IT', 'FE', 'rohit.varma@gmail.com', '9999999999', '2016134020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `link_project_student`
--
ALTER TABLE `link_project_student`
  ADD PRIMARY KEY (`project_id`,`student_id`);

--
-- Indexes for table `project_details`
--
ALTER TABLE `project_details`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email_unique` (`email_id`),
  ADD UNIQUE KEY `contact_unique` (`contact`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
