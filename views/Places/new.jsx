const React = require('react')
const Def = require('../default')

function new_form () {
    const [name, setName] = React.useState('')
    const [pic, setPic] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [cuisine, setCuisine] = React.useState('')

    debugger
    function submitForm () { 
        console.log('here')
        fetch('/places/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, pic, city, state, cuisine})
        })
        .then(res => res.json())
        .then(response => {
            //window.loc
        })
    }
    return (
        <Def>
            <div>       
                <h1>Add a New Place</h1>
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name="pic" value={pic} onChange={(e) => setPic(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
                    </div>
                    <button onClick={(e) => submitForm()}>Add Place</button>
            </div>
        </Def>
)}

module.exports = new_form
