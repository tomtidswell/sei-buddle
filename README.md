# Buddle.
a General Assembly group roject by Sim, Sheema and Tom.

A full-stack social app to find and host events. Are you looking for a playdate for your pet, an additional player for your five a side booking, or someone to go to a museum with? If you are, Buddle is the event app for you. The app uses a MERN stack, uses multiple REST routes, and allows secure signup and login.

This was a group project so all the work you see documented here for the [first version](#v1) of this app was created in one week by all three [contributors](#contributors). I worked alone on a subsequent version on an ad-hoc basis over the following month.

## Built With

* **Front-end**
  * [React](https://reactjs.org/)
  * [react-burger-menu](https://github.com/negomi/react-burger-menu) - giving the site navigation a boost

* **Back-end**
  * [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/) - for helping with the routes
  * [Mongoose](https://mongoosejs.com/) - object modelling
  * [MongoDB](https://www.mongodb.com/) - database

## Wins
I'm very proud of the capability and user experience we managed to pack into this project. Some of the key features are:

* Category and sub-category filtering
* Secure user updates
* The API use to generate a realistic set of seed user data
* Integrating a react package to provide a burger menu


## Bugs
* Events without a price (and not specified as free) are rendered with undefined as a price on the event page


## Challenges
* This project was distinctly more difficult to organise and plan ourselves due to its complexity and the multiple contributors. We achieved an effective working balance through a combination of meticulous planning, breaking the app into small distinct pieces, and distributing the work based on the contributors preference and ability



## Key Learning
* Techniques for teamwork when building a complex app with multiple contributors
* I learned that it can be much quicker to integrate a third party package to provide functionality (react-select and react-burger-menu) rather than build that functionality from scratch
* Getting comfortable with third party packages! I had multiple opportunities to practice implementing third party packages and research their documentation for assistance


## Getting Started

To get a copy of this project up and running on your local machine, you will need to follow these steps. Later I will follow this up with notes on how to deploy the project on a live system.

### Prerequisites

I have been using yarn as my package manager, and so all the steps below are using that, but npm can also be used.

### Installing

1. Initiate the project and install the dependencies:

```
yarn
```

2. Seed the database:

```
yarn seed
```

3. Launch the back-end:

```
yarn serve:back
```

4. Keep that terminal session running and create a new one (on a Mac: cmd + t) then launch the front-end:

```
yarn serve:front
```
It's now ready to access on the [localhost](https://localhost:8000).

## Running the tests

Run the tests from the terminal:
```
yarn test
```

### Test summary

Each of the key back-end CRUD routes has a test


## Versioning

### v1
[Buddle version 1](https://github.com/your/project/contributors)
One week project, ended with a demo and presentation. MVP was complete.

### v2
* Improved styling
* ..._still in progress_

### Future improvements
* Choice of participants for events rather than first come first served
* Enhanced event data to store relevant data for each event type
* Improved seeding 
* View of events per user in addition to users per event
* Ability to friend other users to see more detailed user data


## Contributors
I was one member of a team of three who created the initial release
* [**Sheema Khan**](https://github.com/sheemakhan94) - *v1*
* [**Sim Brar**](https://github.com/simbrar1) - *v1*
* **Me** - *v1 onwards*


## Acknowledgments

* Thanks to General Assembly for a little suport through this project
* I was inspired by the new challenger type banks including Monzo and Revolut
