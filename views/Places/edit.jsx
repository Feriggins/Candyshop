const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
      <Def>
        <main>
    <form method="POST" action={`/places/${data.place.id}?_method=PUT`}/>
  ...   
        <div className="form-group col-sm-6">
                <label htmlFor="name">Place Name</label>
                <input id="name"   />
        <div/>
        <div className="form-group col-sm-6">
        <label htmlFor="name">Place picture</label>
                <input id="pic"   

                    className="form-control"
                    id="name"
                    value={data.place.name}
                    required/>
    </form>
    </div>
    </main>

    </Def>
    )
}

module.exports = edit_form
