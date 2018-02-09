-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-10-26 07:02:44
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daphne`
--

-- --------------------------------------------------------

--
-- 表的结构 `daphne_cart`
--

CREATE TABLE `daphne_cart` (
  `id` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) NOT NULL,
  `weight` varchar(128) COLLATE utf8_bin NOT NULL,
  `sum` int(11) NOT NULL,
  `isChecked` enum('0','1') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_cart`
--

INSERT INTO `daphne_cart` (`id`, `uid`, `pid`, `weight`, `sum`, `isChecked`) VALUES
(12, 1, 4, '1000g', 1, '0');

-- --------------------------------------------------------

--
-- 表的结构 `daphne_product`
--

CREATE TABLE `daphne_product` (
  `pid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  `title` varchar(128) COLLATE utf8_bin NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_product`
--

INSERT INTO `daphne_product` (`pid`, `fid`, `title`, `price`, `stock`) VALUES
(1, 2, '我爱渔 冷冻阿拉斯加狭鳕鱼片 去皮去刺', '200.00', 10),
(2, 2, '海天下 冷冻深海大鲳鱼 袋装冷链直达', '150.00', 200),
(3, 2, '颜色靓丽,爽脆多汁 小汤山樱桃萝卜', '20.00', 60),
(4, 2, '色泽油绿,美味清香留齿 小汤山 菜心', '10.00', 100),
(5, 1, '橙路贝果情人节裸蛋糕水果草莓蓝莓蔓越莓曲奇饼干', '30.00', 0),
(6, 1, '朗悦大吃兄桃酥饼干传统中式糕点早餐零食小吃桃酥点心', '63.00', 100),
(7, 1, '燕巢淡奶油烘焙原料动物性稀奶油蛋糕裱花蛋挞鲜奶油', '12.00', 10),
(8, 1, '诺心LECAKE草莓拿破仑蛋糕水果蛋糕', '70.00', 100),
(9, 3, '树懒果园 泰国进口百香果 西番莲 鸡蛋果', '50.00', 150),
(10, 3, '华润五丰 美仑达 赣南脐橙 供港鲜橙 铂金果', '60.00', 230),
(11, 3, '春节年货 新西兰进口绿奇异果泥猴桃 礼盒装', '60.00', 450),
(12, 3, '河南三门峡 灵宝青苹果 新鲜水果 青香蕉苹果 果园直发', '50.00', 36);

-- --------------------------------------------------------

--
-- 表的结构 `daphne_product_f`
--

CREATE TABLE `daphne_product_f` (
  `fid` int(11) NOT NULL,
  `fname` varchar(128) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_product_f`
--

INSERT INTO `daphne_product_f` (`fid`, `fname`) VALUES
(1, '休闲零食'),
(2, '生鲜'),
(3, '水果');

-- --------------------------------------------------------

--
-- 表的结构 `daphne_product_pic`
--

CREATE TABLE `daphne_product_pic` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL,
  `img1` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `img2` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `img3` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `img4` varchar(128) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_product_pic`
--

INSERT INTO `daphne_product_pic` (`id`, `pid`, `fid`, `img1`, `img2`, `img3`, `img4`) VALUES
(1, 1, 2, 'img/s_w600h600_3.jpeg', 'img/s_w450h450(2).jpeg', '', ''),
(2, 2, 2, 'img/s_w600h600_4.jpeg', 'img/s_w450h450(3).jpeg', '', ''),
(3, 3, 2, 'img/s_w600h600.jpeg', 'img/s_w450h450(4).jpeg', 'img/s_w450h450(5).jpeg', ''),
(4, 4, 2, 'img/s_w600h600_2.jpeg', 'img/s_w450h450(6).jpeg', '', ''),
(5, 5, 1, 'img/mmexport1511669785664.jpeg', 'img/s_w450h450(7).jpeg', 'img/s_w450h450(8).jpeg', ''),
(6, 6, 1, 'img/s_w450h450(9).jpeg', 'img/s_w450h450(27).jpeg', 'img/s_w450h450(10).jpeg', ''),
(7, 7, 1, 'img/s.jpeg', 'img/s_w450h450(11).jpeg', 'img/s_w450h450(12).jpeg', 'img/s_w450h450(13).jpeg'),
(8, 8, 1, 'img/s_w600h600_14.jpeg', 'img/s_w450h450(14).jpeg', '', ''),
(9, 9, 3, 'img/s_w600h600_11.jpeg', 'img/s_w450h450(15).jpeg', 'img/s_w450h450(16).jpeg', ''),
(10, 10, 3, 'img/mmexport1511670727076.jpeg', 'img/s_w450h450(17).jpeg', 'img/s_w450h450(18).jpeg', ''),
(11, 11, 3, 'img/s_w600h600_7.jpeg', 'img/s_w450h450(20).jpeg', 'img/s_w450h450(21).jpeg', ''),
(12, 12, 3, 'img/s_w450h450(26).jpeg', 'img/s_w450h450(22).jpeg', 'img/s_w450h450(23).jpeg', 'img/s_w450h450(25).jpeg');

-- --------------------------------------------------------

--
-- 表的结构 `daphne_product_weight`
--

CREATE TABLE `daphne_product_weight` (
  `pid` int(11) NOT NULL,
  `weight` varchar(128) COLLATE utf8_bin NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `taste` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_product_weight`
--

INSERT INTO `daphne_product_weight` (`pid`, `weight`, `price`, `taste`) VALUES
(1, '5斤', '200.00', NULL),
(1, '10斤', '300.00', NULL),
(2, '5斤', '150.00', NULL),
(2, '10斤', '230.00', NULL),
(3, '5斤', '20.00', NULL),
(3, '10斤', '40.00', NULL),
(4, '3斤', '10.00', NULL),
(4, '5斤', '20.00', NULL),
(5, '500g', '30.00', NULL),
(5, '1000g', '60.00', NULL),
(6, '500g', '63.00', NULL),
(6, '1000g', '96.00', NULL),
(7, '500ML', '20.00', '草莓味'),
(7, '1000ML', '150.00', '草莓味'),
(8, '500g', '70.00', NULL),
(8, '1000g', '119.00', NULL),
(9, '1kg', '50.00', NULL),
(9, '2kg', '100.00', NULL),
(10, '2.5kg', '60.00', NULL),
(10, '5kg', '90.00', NULL),
(11, '2.5kg', '60.00', NULL),
(11, '5kg', '120.00', NULL),
(12, '2.5kg', '50.00', NULL),
(12, '5kg', '96.00', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `daphne_slider`
--

CREATE TABLE `daphne_slider` (
  `id` int(11) NOT NULL,
  `img` varchar(128) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `daphne_slider`
--

INSERT INTO `daphne_slider` (`id`, `img`) VALUES
(1, 'img/mmexport1511509417117.jpeg'),
(2, 'img/mmexport1511509410929.jpeg'),
(3, 'img/mmexport1511510297926.jpeg');

-- --------------------------------------------------------

--
-- 表的结构 `daphne_user`
--

CREATE TABLE `daphne_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(128) DEFAULT NULL,
  `upwd` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `daphne_user`
--

INSERT INTO `daphne_user` (`uid`, `uname`, `upwd`) VALUES
(1, 'biscuit', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daphne_cart`
--
ALTER TABLE `daphne_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `daphne_product`
--
ALTER TABLE `daphne_product`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `daphne_product_pic`
--
ALTER TABLE `daphne_product_pic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `daphne_user`
--
ALTER TABLE `daphne_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `daphne_cart`
--
ALTER TABLE `daphne_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `daphne_product`
--
ALTER TABLE `daphne_product`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `daphne_product_pic`
--
ALTER TABLE `daphne_product_pic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `daphne_user`
--
ALTER TABLE `daphne_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
