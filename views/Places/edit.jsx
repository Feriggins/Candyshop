const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
  return (
    <Def>
      <main>
        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <h1>Edit Place</h1>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-6">
                  <label for="name" class="form-label">Place Name</label>
                  <input type="text" class="form-control" id="name" name="name" defaultValue={`${data.place.name}`}/>
              </div>
              <div class="col-6">
                  <label for="pic" class="form-label">Place Picture</label>
                  <input type="text" class="form-control" id="pic" name="pic" defaultValue={`${data.place.pic}`}/>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-6">
                  <label for="city" class="form-label">Place City</label>
                  <input type="text" class="form-control" id="city" name="city" defaultValue={`${data.place.city}`}/>
              </div>
              <div class="col-6">
                  <label for="state" class="form-label">Place State</label>
                  <input type="text" class="form-control" id="state" name="state" defaultValue={`${data.place.state}`}/>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col">
                  <label for="cuisines" class="form-label">Place Cuisine</label>
                  <input type="text" class="form-control" id="cuisines" name="cuisines" defaultValue={`${data.place.cuisines}`}/>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-2">
                <button type="submit" class="btn btn-primary mb-3">Edit Place</button>
              </div>
            </div>
          </div>
        </form>
      </main>

    </Def>
  )
}

module.exports = edit_form
