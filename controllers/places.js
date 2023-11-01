const router = require('express').Router()
// looking for whats in the view folder
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
// GET /places
router.get('/', (req, res) => {
    
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe22',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      },
      {
        name: 'Coding Cat Cafe44',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }
    ]
    res.render('places/index', { places })
  })
  
  module.exports = router
