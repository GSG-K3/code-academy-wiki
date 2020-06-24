# GSG Code Academy Wiki
- [Click here to visit our website](https://codeacademywiki.herokuapp.com/)
- [Figma Design](https://www.figma.com/file/DGkBLGal9IYhEDyjqpflsj/GSG-CA-Wiki?node-id=0%3A1)

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
   node server/database/config/db_build.js
 ```
- If you want initial values for database
```
    psql 
    \c {databasename} 
    \i server/database/config/dummy_data.sql

```
- Run this to start the website:
       
       npm run dev
   


## Database Schema
<mxfile host="app.diagrams.net" modified="2020-06-24T13:36:48.852Z" agent="5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36" etag="STcL7vhbm8TWYF0S7DC1" version="13.3.2" type="device"><diagram id="jraqPgDObB-hCuPpyhJ6" name="Page-1">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</diagram></mxfile>
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
