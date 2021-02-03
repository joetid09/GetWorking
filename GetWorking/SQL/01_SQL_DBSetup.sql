USE [master]

IF db_id('GetWorking') IS NULl
  CREATE DATABASE [GetWorking]
GO

USE [GetWorking]
GO


DROP TABLE IF EXISTS [Application];
DROP TABLE IF EXISTS [ApplicationTag];
DROP TABLE IF EXISTS [Event];
DROP TABLE IF EXISTS [Tag];
DROP TABLE IF EXISTS [UserProfile];
GO


CREATE TABLE [Application] (
  [Id] integer PRIMARY KEY IDENTITY,
  [JobTitle] nvarchar(50) NOT NULL,
  [Company] nvarchar(50) NOT NULL,
  [DateApplied] date NOT NULL,
  [UserProfileId] integer NOT NULL
)

CREATE TABLE [ApplicationTag] (
  [Id] integer PRIMARY KEY IDENTITY,
  [TagId] Integer NOT NULL,
  [ApplicationId] Integer NOT NULL
)

CREATE TABLE [Event] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Title] nvarchar(50) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DateToComplete] datetime NOT NULL,
  [Body] nvarchar(256) NOT NULL,
  [Status] integer NOT NULL,
  [ApplicationId] integer NOT NULL,
)

CREATE TABLE [Tag] (
[Id] integer PRIMARY KEY IDENTITY,
[Name] nvarchar(25) NOT NULL
)
CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FirebaseUserId] NVARCHAR(28) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [CreateDateTime] datetime NOT NULL

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId),
  CONSTRAINT UQ_Email UNIQUE(Email)
)

ALTER TABLE Application
ADD FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id);

ALTER TABLE ApplicationTag
ADD FOREIGN KEY (ApplicationId) REFERENCES Application(Id);

ALTER TABLE ApplicationTag
ADD FOREIGN KEY (TagId) REFERENCES Tag(Id);

ALTER TABLE Event
ADD FOREIGN KEY (ApplicationId) REFERENCES Application(Id);

GO