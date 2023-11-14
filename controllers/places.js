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

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

router.get('/:id/edit', (req, res) => {
  let id= Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')

}
else {
  res.render('places/edit', {place: places[id], id})
}
})


router.post('/new', (req, res) => {

  const name = req?.body?.name || 'Default Name'
  const city = req?.body?.city || 'Default City'
  const state = req?.body?.state || 'PA'
  const cuisines = req?.body?.cuisines || 'Default Cuisine'
  const picture = req?.body?.pic || 'http://placekitten.com/400/400'

  places.push({ name, city, state, cuisines, pic: picture })
  res.redirect('/places')
})


// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log(id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect(`/places/${id}`)
  }
})
router.put('/:id', (req, res) => {
  console.log(req.body);
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})



module.exports = router
