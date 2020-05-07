# GSG Code Academy Wiki
[Figma Design](https://www.figma.com/file/DGkBLGal9IYhEDyjqpflsj/GSG-CA-Wiki?node-id=0%3A1)

## Challenge

Code Academy trains 16 students per cohort, and there are two cohorts that graduates every year in both Gaza and West Bank. The client finds it is difficult to search for a students who graduated from the academy in order to be able to get contact with them or to view projects in which they participated. And this is because there is no reference database for all cohorts that graduated from the academy.

## Solution 

GSG Code Academy Wiki allows client to view all students who graduated from code academy. The client can select Gaza or Khalil city then he can view their cohorts, so he can view all students projects at this cohort and know who are the team members who participated of each one and their contact information.

## User Journey

User will use our website to to view all cohorts that have been enrolled in Code Academy.User can view all the students who graduated from the academy and view every student profile and his/her projects he/she participated in, his/her github page, email address, phone number and address to easily contact with him/her. Also User can search for a certain student by filtering using student name.

## User Story

### As a user

- I want to view information about GSG code academy .
- I want to visit code academy website http://gazaskygeeks.com/code
- I want to choose between Gaza and Khalil Cohorts.
- I want to view all GSG CA Cohorts so that i can reach to the students and their projects.
- I want to view all cohort projects so that I can recognize it.
- I want to select a cohort so that I can see it's information, students, projects and mentors.
- I want to choose a project so that I can view more project information and recognize contributors to this project.
- I want to search for the student's name so that I can get all his projects and his contact information easily.
- I want to go to the student's GitHub page so that I can visit their account.

## How To Use Our Website
- Clone this repo to your local machine using terminal:
```shell
$ git clone https://github.com/GSG-K3/code-academy-wiki.git
```

- Now follow these steps to install node modules
```shell
$ cd code-academy-wiki
$ npm i
$ cd client 
$ npm i
$ cd ..
```
- Create database locally
- Create config.env file in root and put DATABASE URL in it:
```
   DATABASE_URL = postgress://{username}:{password}@localhost:5432/{databasename}
   ```
- Build database table :
```
   node ./server/database/db_bulid.js
 ```
- If you want initial values for database
```
    psql 
    \c {databasename} 
    \i ./server/database/dummy_data.sql

```
- Run this to start the website:
       
       npm run dev
   


## Database Schema
![Untitled Diagram](https://user-images.githubusercontent.com/57197216/79913442-44727280-842c-11ea-94c1-cebac7562d97.png)

## Technologies 

* [React js](https://reactjs.org/).
* [Ant Design](https://ant.design/).
* Database: [PostgreSQL](https://www.postgresql.org/).
* Styling: CSS.
* [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/).

## Team Leader
 - [Somaya](https://github.com/someyaaltous)


## Team Members

 - [Bayan](https://github.com/bayan-404)
 - [Hussein](https://github.com/Hussein-shahatet97)
 - [Kholoud](https://github.com/kholoudfann)
 - [Rahaf](https://github.com/rahaf-96)
