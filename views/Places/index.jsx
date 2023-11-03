const React = require("react")
const Def = require('../default')
  
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>
            <a href={'/places/${index}'} > 
            {place.name}
            </a>
            </h2>
            <p className="text-start">
              {place.cuisines}
            </p>
            <img className="img-fluid" src={place.pic} alt={place.name} />
            <p className="text-start">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })

    // this return belong to the function
    return (
        <Def>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
            </head>
            <body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 offset-3 text-center">
                        <h1 className="text-info">Places to Rant or Rave About</h1>
                            <div className="row">
                                {placesFormatted}
                            </div>
                        </div>
                    </div>
            
                </div>
            </body>
        </Def>
)}

module.exports = index
    