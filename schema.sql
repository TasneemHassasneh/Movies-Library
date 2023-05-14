create table if not exists movies(
  id serial primary key,
  title varchar(255),
  overview varchar(100000)
);

insert into movies(title,overview) values('test','anything')