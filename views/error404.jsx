const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="/css/style.css"/> 
        </head>     
        <main>

              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img className="home-image" src='/images/salads.avif'/>
                    <div>
                        Photo by <a href="https://unsplash.com/@shootdelicious">Eiliv Aceron</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
        </main>
      </Def>
    )
  }
  

module.exports = error404
