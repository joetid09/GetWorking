
set identity_insert [UserProfile] on
insert into UserProfile (Id, FirebaseUserId, FirstName, LastName, Email, CreateDateTime) values (1, 'bQ66wMM0s7eoeRpyHUjeRvwm3Ek2' ,'Joe', 'Tidwell', 'jobsearcher@jobs.com', '2021-01-11');
insert into UserProfile (Id, FirebaseUserId, FirstName, LastName, Email, CreateDateTime) values (2, 'S96zlXUi2GXkgd0gleFl1u67CiU2' ,'Martha', 'Sanchez', 'networkingfiend@jobs.com', '2020-11-21');
insert into UserProfile (Id, FirebaseUserId, FirstName, LastName, Email, CreateDateTime) values (3, 'HN2DAxOSwugoBsFkLGYgQc1mOzu1' ,'Carlos', 'Lyons', 'carlosdog@jobs.com', '2021-01-20');
set identity_insert [UserProfile] off

set identity_insert [Application] on
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (1, 'Full Stack Developer' ,'Dayton Freight', '2021-01-08', 1, 'linkedIn');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (2, 'QA Lead' ,'HCA', '2020-10-11', 2, 'LinkedIn');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (3, 'Backend Engineer' ,'Bolt Systems', '2020-12-24', 3, 'Indeed');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (4, 'Code Monkey' ,'LocalRoasters', '2020-08-12', 1, 'LinkedIn');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (5, 'Front End Developer' ,'Rover', '2021-01-08', 2, 'Indeed');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (6, 'Full Stack Developer' ,'Lantern', '2021-01-15', 3, 'LinkedIn');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (7, 'Wordpress Wizard' ,'Kimbel Mechanical', '2021-01-22', 1, 'Indeed');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (8, 'React Dev' ,'Hoover Manufacturing', '2020-01-08', 2, 'LinkedIn');
insert into [Application] (Id, JobTitle, Company, DateApplied, UserProfileId, Source) values (9, 'Graphic Designer' ,'Lab Case Studies', '2021-01-01', 3, 'LinkedIn');
set identity_insert [Application] off

set identity_insert [ApplicationTag] on
insert into [ApplicationTag] (Id, TagId, ApplicationId) values(1, 2, 1)
insert into [ApplicationTag] (Id, TagId, ApplicationId) values(2, 2, 2)
insert into [ApplicationTag] (Id, TagId, ApplicationId) values(3, 1, 2)
set identity_insert [ApplicationTag] off

set identity_insert [Tag] on
insert into [Tag] (Id, [Name]) values (1, 'FullStack')
insert into [Tag] (Id, [Name]) values (2, 'Backend')
set identity_insert [Tag] on

set identity_insert [Event] on
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (1, 'Applied' ,'2021-01-07', '2021-01-08', 'Oh, yes. Harmless is just the word: that', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (2, 'Offer' ,'2021-01-09', '2021-01-09', 'the Doctor, I can save the world with a kettle and some', 0, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (3, 'Denial' ,'2021-01-07', '2021-01-07', 'River, you know my name. You whispered my name in my ear!', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (4, 'Interview' ,'2021-01-07', '2021-01-10', 'I call you a genius, except I in the room. I sorry.', 0, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (5, 'Denial' ,'2020-12-20', '2020-12-20', 'It is! It the city of New New York! Strictly speaking, it', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (6, 'Denial' ,'2020-10-05', '2020-10-05', 'No. You too short and bossy, and your nose is all funny', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (7, 'InterView' ,'2021-01-01', '2021-01-06', 'Not allowed? Not allowed? Me, I’m allowed everywhere.', 0, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (9, 'Applied' ,'2021-01-07', '2021-01-08', 'These are attack eyebrows. You could take bottle tops', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (10, 'Offer' ,'2021-01-07', '2021-01-10', 'Soon, I expect. Or later. One of those. A tear, Sarah', 1, 1);
insert into [Event] (Id, Title, DateCreated, DateToComplete, Body, [Status], ApplicationId) values (11, 'Offer' ,'2021-01-20', '2021-01-21', 'Are you capable of speaking without flapping your hands', 0, 1);
set identity_insert [Event] off