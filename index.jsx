import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const favColor = formData.get("favColor")
        console.log(favColor)
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
                <textarea id='description' name='description' defaultValue="This is a description"></textarea>

                <fieldset>
                    <legend>Employment Status</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value={"unemployed"} />
                        Unemployed
                        <input type="radio" name="employmentStatus" value={"part-time"} defaultChecked={true} />
                        Part-time
                        <input type="radio" name="employmentStatus" value={"full-time"} />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name='favColor' defaultValue={""} required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>


                <button>Submit</button>

            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);