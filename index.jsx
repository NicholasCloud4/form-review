import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
    console.log(password)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" defaultValue="poke@mon.com" placeholder="joe@schmoe.com" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description'></textarea>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);