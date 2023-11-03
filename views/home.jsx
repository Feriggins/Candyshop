const React = require('react')
const Def = require('./default')
// always need the const react 

// you need a function in all your jsx files no matter what to get it to return 
function home () {
    return (
        <Def>
            <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css"/> 
            </head>            
            <body>
                <h1>HOME</h1>
                <div>
                    <img class="home-image" src='/images/Kabobs.avif'/>
                    <div>
                        Photo by <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </body>
            </html>
        </Def>
    )
}

module.exports = home
// will always be under all code
  