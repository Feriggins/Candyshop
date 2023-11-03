const router = require('express').Router()
// looking for whats in the view folder

let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/mike-petrucci-c9FQyqIECds-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/artem-gavrysh-F6-U5fGAOik-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe22',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/logan-weaver-lgnwvr-fERtc6SsLVs-unsplash.jpg'
      },
      {
        name: 'Coding Cat Cafe44',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/ceyda-ciftci--ylyzFOEBS0-unsplash.jpg'
      }
    ]

router.get('/new', (req, res) => {
    res.render('places/new')
})

res.render('places/show', { place: places[id] })


router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show')
  }
})




router.post('/new',(req, res) => {

  const name = req?.body?.name || 'Default Name'
  const city = req?.body?.city || 'Default City'
  const state = req?.body?.state || 'PA'
  const cuisines = req?.body?.cuisines || 'Default Cuisine'
  const picture = req?.body?.pic || 'http://placekitten.com/400/400'

  console.log(req)
  places.push({name, city, state, cuisines, pic: picture})
  //res.redirect('/places')
})

  
// GET /places
router.get('/', (req, res) => {    
    res.render('places/index', { places })
  })
  
  module.exports = router
