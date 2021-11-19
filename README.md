
# CEN Group Project 11281group40

* Member1: Edwin Lora
* Member2: Wuseok (Josh) Jung
* Member3: Tarang Donga
* Member4: William Manuel


## Notes
This project is a full stack mobile app developed using the MERN stack. 


## Prerequisites
#### Download Expo Go
To run this application on your mobile device, you must have Expo Go installed. The download links for iOS and Android 
can be found below:
* [Download Expo Go for iOS](https://apps.apple.com/us/app/expo-go/id982107779)
* [Download Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US)

#### Download Node.js and npm installed
To be run the backend and frontend locally, you must have Node.js and npm. Instructions to 
install Node.js and npm can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Clone Directory onto local machine
Make sure you have cloned this directory into a directory of your choice on your local machine. This can be done
with the following command: 

` git clone https://github.com/loragonzaleze/11281group40.git  `

#### Install all dependencies for back-end and front-end folders
To be able to run the frontend and backend, the dependencies must be installed. Open a terminal/command line in 
the directory you cloned in the previous step, ensuring that the name is `11281group40`. Verify that you are in the correct directory by running `ls` on macOS, and `dir` on Windows. If you are in the right directory, the following should display: 
``` 
.circleci   .vs   README.md   ecoflo_FrontEnd    ecoflo_backend 
```
The folders that begin with a period might not display, so it is fine if they do not appear. 

Once you have verified that you are in the correct directory, you can begin installing the dependencies:

* Installing dependencies for Frontend
  * `cd ecoflo_FrontEnd`
  * `npm install`
* Installing dependencies for Backend
  * `cd ecoflo_backend`
  * `npm install`

## Running React Native applicaton (Front-End)
The following steps will guide you on how to run the mobile app on your phone
* Ensure you are in front-end folder by running `cd ecoflo_FrontEnd`
* Run `npm start` which will start the React Native project
* A window in your browser will open up. Scan the QR code present on the website. This should open up the Expo Go app and begin installing the app on your phone
* Once the app displays, you can either login with an existing account, or create a new one
* The following login credentials are for an existing account: 
  * **Username:** admin
  * **Password:** admin

Once these steps are complete, you will be able to use the app with all of its functionalities

## Running Node.js/Express Server locally (Back-End)
The following steps are to run the back-end server locally for debugging purposes.
* Ensure you are in back-end folder by running `cd ecoflo_backend`
* Run `nodemon server` to run the server
* The console should display the following if it connects successfully to the database:
  * ```
    Server started on port 5002
    Connected to Database
    ```
* The API endpoints can be tested using an API tester such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/)

## API Endpoints Documentation
Different API endpoints were created using Node.js and Express. The endpoints are hosted on the cloud provider [Heroku](https://www.heroku.com/). The following contains the API endpoints and their descriptions. None of the API endpoints require any keys. To see their responses for testing purposes, they can be called using any API tester such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

* #### https://loginapitest.herokuapp.com/api/login/ (Login Endpoint)
  * **Type:** POST
  * **Description:** This endpoint is used to login users. Creates new users and logins new users.
  * **Body:** 
    *  Request
        ```
        {
            "username" : string,
            "password" : string,
            "existing_user" : boolean
        }
        ```
    * Response 
        ```
        {
            "success" : boolean,
            "type" : string,
            "correctPassword": boolean,
            "loginToken" : string
        }
        ```
* #### https://loginapitest.herokuapp.com/api/user/picture (User Profile Picture)
  * **Type:** POST/GET
  * **Description:** Used to set or retrieve a user's profile picture. 
  * **Body:**
    * Request - No body. Parameters are queried in the URL as follows: 
      `https://loginapitest.herokuapp.com/api/user/picture?username=REPLACE_WITH_USERNAME`
    * Response
      ```
        {
            "type" : string,
            "success" : boolean,
            "profilePicture": string
        }
      ```
* #### https://loginapitest.herokuapp.com/api/emissions/ (Update User Emission)
  * **Type:** POST
  * **Description:** This endpoint is used to update a user's daily emissions
  * **Body:** 
      *  Request
          ```
          {
              "username" : string,
              "emissions" : int,
              "date" : Date
          }
          ```
      * Response 
          ```
          {
              "type" : string,
              "success" : boolean
          }
          ```
* #### https://loginapitest.herokuapp.com/api/emissions/pastweek (Retrieve User weekly emissions)
  * **Type:** GET
  * **Description:** This endpoint retrieves a user's daily emissions from the past 7 days.
  * **Body:**
    * Request - No body. Parameters are queried in the URL as follows:
      * `https://loginapitest.herokuapp.com/api/emissions/pastweek?username=REPLACE_WITH_USERNAME`
    * Response 
      ```
      {
          "type" : string,
          "success: : boolean,
          "emissions" : Array of tuples contaning date and emissions
      }
      ```
* #### https://loginapitest.herokuapp.com/api/steps
  * **Type:** POST
  * **Description:** Updates a user's weekly steps. Each week starts on the latest Sunday
  * **Body:**
    * Request 
      ```
      {
          "username" : string,
          "date" : Date, 
          "steps" : int
      }
      ```
    * Response
      ```
      {
          "type" : string,
          "success" : boolean
      }
      ```
* #### https://loginapitest.herokuapp.com/api/steps/leaderboard
  * **Type:** GET
  * **Description:** Returns the top 10 users with the most steps for the past week. Weeks start on the latest Sunday
  * **Body:**
    * Request - No body and no URL queries, simply calling the URL returns the data
    * Response
      ```
      {
          "type" : string,
          "success" : false,
          "users" : array of usernames,
          "steps" : array of user steps
      }
      ```
## Third-Party APIs used
We used 2 Third-Party API endpoints in order to retrieve the coordinates for Solid and Hazardous Waste managements throughout 
the state of Florida. More information can be found at their respective websites below:
* Florida Department of Environmental Protection Geospatial Open Data (Solid Waste Management)
  * https://geodata.dep.state.fl.us/datasets/solid-waste-disaster-debris-management-sites/api
* Florida Department of Environmental Protection Geospatial Open Data (Hazardous Waste Management)
  * https://geodata.dep.state.fl.us/datasets/hazardous-waste-transporter-facilities/api




