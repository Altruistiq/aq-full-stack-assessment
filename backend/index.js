import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import footprintApi from './footprintApi'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {    
  res.send('Welcome to Altruistiq!')

  const countries = await footprintApi.getCountries()
  const country = await footprintApi.getDataForCountry(14)

  console.log('showing first 5 countries:')
  console.log(countries.slice(0, 5))
  console.log('showing first 5 years of a country:')
  console.log(country.slice(0, 5))
})

app.get('/chart-data', async (req, res) => {    
  // Your code here
  res.json({
    data: []
  })
})

app.listen(5005,() => {     
  console.log('app is listening on port 5005')
})