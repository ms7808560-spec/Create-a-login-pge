import React from 'react'

const App = () => {
    return (
        <div>


            <div class="container">
                <div class="form-header">
                    <h2>Create Account</h2>
                </div>
                <form action="">
                    <div class="input-box">
                        <label for="username">Username :</label>
                        <input type="text" placeholder="Enter username" required />#</div>
                    <div class="input-box" >
                        <label for="Email">Email :</label>
                        <input type="email" placeholder="Enter Email" required />#</div>
                    <div class="input-box">
                        <label for="Password">Password :</label>
                        <input type="Password" placeholder="Enter Password" required />#</div>
                    <div class="input-box" />
                    <label for="Confirm Password ">Confirm Password :</label>
                    <input type=" Confirm Password" placeholder="Enter Confirm Password" required />
                    <div class="Alert">
                        <p>By clicking sign up, you agree to our <a href="a">Term,</a><a href="a">Privacy Policy,</a>and </p></div>
                    <button class="btn" type="Submit">Sign up</button>

                </form>


            </div>
        </div>
    )
}

export default App
