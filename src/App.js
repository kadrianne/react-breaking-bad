import React from 'react'
import './App.css'

class App extends React.Component {
  
  state = {
    characters: [],
    alive: [],
    deceased: []
  }

  render(){
    return (
      <div className="App">
        <h1>Breaking Bad</h1>
        <main>
          <section className='all-characters'>
            <h2>All Characters</h2>
          </section>
          <div className='sorted-characters'>
            <section className='alive'>
              <h2>Alive</h2>
            </section>
            <section className='deceased'>
              <h2>Deceased</h2>
            </section>
        </div>
        </main>
      </div>
    )
  }
}

export default App
