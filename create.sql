drop database if exists tournote;

create database tournote;

use tournote;

-- 用户表
create table t_user(
    id int primary key auto_increment,
    nickName varchar(20),
    userTel varchar(20),
    password varchar(20),
    userImgUrl varchar(100)  
)engine=Innodb default charset=utf8;

-- 游记表
create table t_tour(
    id int primary key auto_increment,
    title varchar(50),
    content blob,
    contentImg varchar(100),
    type varchar(50),
    publishDate date,
    userId int,
    foreign key (userId) references t_user(id)
)engine=Innodb default charset=utf8;

-- 评论表
create table t_comment(
    id int primary key auto_increment,
    content varchar(200),
    pubDate date,
    userId int,
    tourId int,
    foreign key (userId) references t_user(id),
    foreign key (tourId) references t_tour(id)
)engine=Innodb default charset=utf8;

-- 结伴表
create table t_together(
    id int primary key auto_increment,
    title varchar(100),
    tel varchar(20),
    qq varchar(20),
    weixin varchar(20),
    toCity varchar(50),
    fromCity varchar(50),
    startDate date,
    lastDays int,
    limitNum int,
    intro varchar(500),
    coverImg varchar(500),
    userId int,
    foreign key (userId) references t_user(id)
)engine=Innodb default charset=utf8;

-- 结伴表-参加人
create table t_together_join(
    id int primary key auto_increment,
    userId int,
    togetherId int,
    foreign key (userId) references t_user(id),
    foreign key (togetherId) references t_together(id)
)engine=Innodb default charset=utf8;