# MOODIFY

## Summary

Bootstrapped with create-react-app and completed using JavaScript, vanilla CSS, react-chart-js, JSX and React. 

Client Live Deployment: https://moodify.vercel.app/

Server Live Deployment: https://moodify-server-api.herokuapp.com/

Moodify lets registered users log into their account and create an in-depth database of their moods over time, along with keeping track of hours slept. Moodify also features extensive note-taking functionality to further understand yourself. Being a human is difficult, and tracking how you feel can help you develop a better sense of self as well as identify why you feel the way you do. Moodify aims to provide a tool-kit for those looking to better themselves, or simply record their feelings.

In this project I wrote a server in Express connected to a PostgreSQL database. I used fetch calls in the componentDidMount React life-cycle method to populate the user-generated chart. React-router allowed for a fluid and dynamic UI as well as helped maintain organization as the application grew in size.
 

## Screenshots


### splash page

A landing page greets the user, displayed below.

![image](https://user-images.githubusercontent.com/66629254/96261642-b4525780-0f8e-11eb-9116-e560a31b4a0a.png)


### login form

The user can either register a new account, or log in with a demo account to view the application's functionality.

![image](https://user-images.githubusercontent.com/66629254/96261706-c7fdbe00-0f8e-11eb-967e-bb3e3239530a.png)

### home page

On the home page, the chart is front and center with a history of your moods shown on the right-hand side.
A comprehensive chart is provided to map the user's mood over time. A recent addition
to the application is the ability to log the user's hours slept and track their sleep in tandem with 
their mood, represented by the purple line on the y-axis.

A filter is available to filter records by all time, past month, and past week.

![image](https://user-images.githubusercontent.com/66629254/96261739-d2b85300-0f8e-11eb-924b-550c951b4168.png)



### add-mood page

When a logged in user chooses, they can click the 'add a mood' button to be taken to the add-mood form.

![image](https://user-images.githubusercontent.com/66629254/96261761-d9df6100-0f8e-11eb-8981-4b56349e093b.png)


## Tech stack and testing 

React.js, JavaScript, vanilla css, PostgreSQL, SQL, Node.js, Enzyme, Jest, Mocha, Chai

Front end testing:
 Jest and Enzyme, each React component has well-grained tests to determine that the app has not lost functionality.

Back end testing:
 Mocha and Chai were used to test each endpoint and knex-services, each endpoint has one test at a minimum.
 
## Code Organization
### Components
Each React component is placed within the /src/components folder. They are named semantically and logically. 
### CSS
CSS files are contained within the /src/css folder, excluding the background animation's .css file.
### Tests
All tests are held inside of the /src/tests folder along with a snapshot folder containing snapshot tests for each component.
 
## The Backend
### Moodify-API

I created both the fronted and backend on my own. The backend is running on Node.js and PostgreSQL.

API documentation is available at the API Github.
- Moodify-API Github Repo: https://github.com/Mf-ff99/moodify-api
- The API is deployed on Heroku here: https://moodify-server-api.herokuapp.com/


## Running the application 
If you wish to see what the application can do on your own machine, or just to tinker around, follow the steps below:

* Clone Client repo to your local machine
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
