# Welcome to my Front-End Developer Test for Next Gate Tech.

## The challenge
1. In the first part of this test you will need to convert the results to a json structure of your choice, and upload the results to a new Firebase Database (Please use Firebase Realtime Database and NOT Cloud Firestore), and thus new Firebase Project.

2. Next comes the fun part where you will need to consume the data from the Firebase database and display it in a mini front-end dashboard. Use any front-end language or styling
structure as you please.

3. Deploy your work to something like Firebase Hostin

## The Solution
1. I converted the csv file to an json file. I used the given long format, since i wasnt sure, if we were supposed to change it. This given, the perfomance of the test app is not that good, although i tried to speed it up by indexing on the date. Also i realized, that the format is very unefficent in regards of network egress. I already used up more then 80% (8.4GB) of the volume for July.

2. I used react to create a dashboard to display the data. Therefore i created a simple login, using the firebase auth. After successfully login in, the dashbard shows an overview of all funds, the no. of reports and alerts for a specific date. I added a datepicker (dependencies datepicker & moment) to select the date and limited it to the date range of the data. I tried to copy the style of https://nextgatetech.com, by copying the logo, using the same font, color-set, etc. 

3. I hosted the code on github and deployed the app to firebase: https://fedtest-c707a.web.app/

## What i learned
As i mentioned already the data structure in the long format was hard to handle. I will definitly read up on that topic.

Since I had no experience with firebase, i think after a first impression it looks pretty versaitile: it abstracts away a lot of the back end possibilities (auth, database ~nosql like, storage, hosting, microservices...) into a complete package. It's well documented and easy to use.

