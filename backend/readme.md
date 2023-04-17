# Altruistiq hiring assessment
Welcome to Altruistiq! Thank you very much for being here. 🙏

For this assessment we will be using 4 things:
1. The code in the repo
2. Your laptop to run the code
3. Your IDE which you will screenshare
4. (optional) https://webwhiteboard.com/ for architecturing & brainstorming

This repo will help you kick-start your live coding session. The following has been set up (check package.json for full details) but you're free to use any package you may seem fit:

- express
- mocha
- babel
- axios
- lodash
- vue
- vuex

Hot reloading is enabled (backend) and tests rerun when code changes.

### Setup
Clone this repo, then
```
cd backend && npm i
cd fronted && npm i
```

### Run it
Code automatically reloads upon code changes. You will need to refresh your browser if you use it.

```
cd backend && npm start
cd frontend && npm start
```

### Run tests
To run test (code and tests are being watched so automatically reruns).
```
npm test
```

# Tasks
Please read through all the tasks to understand the full scope of this assessment.

## Task 1 - Create an API that returns the total emission per country per year (~15min)
Create an api endpoint at `/chart-data`.\
To get the data for this API, you will use the [footprint api](https://data.footprintnetwork.org/#/api) which has already
been setup for you. Use as follows:

```js
import footprintApi from './footprintApi'

// get all countries and their countryCodes
await footprintApi.getCountries()

// this will give you carbon data per year for that country
await footprintApi.getDataForCountry(countryCode)

```
## Task 2 - Create an animated chart (~40 min)
Create an animated chart as per this example, but style it as per the Figma design<br/><br/>
![https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif](https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif)

Fetch [this Figma file](https://www.figma.com/file/WJ1BvQzvFchIFxo67iIywi/Altruistiq-frontend-hiring-task) to get started.

The font used is
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap')
```

# Discussion (~15min)
## Caching
Cache on front and backend.

## Securing API
Secure the API endpoints however you see fit.

## Scaling
Make your API response under 1 second. Keep in mind that your API can be triggered multiple times per second.