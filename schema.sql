create table if not exists movies(
  id serial primary key,
  title varchar(255),
  comments varchar(100000)
);

insert into movies(title,comments) values('test','comments')