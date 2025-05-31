import React from 'react'

const App = () => {
  let name = "Tanay Lohani";
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit quos qui suscipit voluptatem repellat, magni consequatur dolore tempore necessitatibus ipsa fugit maxime, excepturi eligendi? A inventore odio dolore cumque.</p>
      </div>
    </>
  )
}

export default App
