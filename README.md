## MOODIFY
Created with create-react-app and completed using JavaScript, CSS, and React. 

Client Live Deployment: https://vercel.com/mf-ff99/moodify

Moodify allows registered users to log in to their account and create an in-depth database of their 
moods over time. 

## Screenshots

A ladning page greets the user, as displayed below.

### splash page
![image](https://user-images.githubusercontent.com/66629254/96261642-b4525780-0f8e-11eb-9116-e560a31b4a0a.png)

The user can either register a new account, or log in with a demo account to view the application's functionality.

### login form
![image](https://user-images.githubusercontent.com/66629254/96261706-c7fdbe00-0f8e-11eb-967e-bb3e3239530a.png)

On the home page, the chart is front and center with a history of your moods shown on the right-hand side.
A comprehensive chart is provided to map out the user's mood over time. A recent addition
to the application is the ability to log the user's hours slept and track their sleep in tandem with 
their mood, represented by the purple line on the y-axis.

A filter is available to filter your record by all time, past month, and past week.

### home page
![image](https://user-images.githubusercontent.com/66629254/96261739-d2b85300-0f8e-11eb-924b-550c951b4168.png)

When a logged in user chooses, they can click the 'add a mood' button to be taken to the add-mood form.


### add-mood page
![image](https://user-images.githubusercontent.com/66629254/96261761-d9df6100-0f8e-11eb-8981-4b56349e093b.png)


## Tech stack and testing 

* React.js
* JavaScript
* vanilla css
* PostgreSQL
* SQL
* Node.js
* Enzyme
* Jest
* Mocha
* Chai


Front end testing:
 Jest and Enzyme, each React component has well-grained tests to determine that the app has not lost functionality

Back end testing:
 Mocha and Chai were used to test each endpoint and knex-services, each endpoint has one test at a minimum.
 
## The Backend
### Moodify-API

I created both the fronted and backend on my own. The backend is running on Node.js and PostgreSQL.

API documentation is available at the API Github.
Moodify-API Github Repo: https://github.com/Mf-ff99/moodify-api
The API is deployed on Heroku here: https://moodify-server-api.herokuapp.com/


## Running the application 
If you wish to see what the application can do on your own machine, follow the steps below:

*Clone Client repo to your local machine
Run ``` 
npm i```
```
npm start
```


## Other Tidbits
### Credit for Inspirational Quotes API
  github repo: https://github.com/ssokurenko/quotes-react-app
  creator github: ssokurenko
  uploaded by creator for use: https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
