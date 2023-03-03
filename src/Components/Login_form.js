import React, { useState } from 'react'
import './Login_form.css'
const Login_form = () => {
    const [btnColor1, setBtnColor1] = useState("")
    const [btnColor2, setBtnColor2] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const userName = document.getElementById('userName')
    // const userEmail = document.getElementById('userEmail')
    const handleClick = (e) => {
        e.preventDefault()
        console.log("clicked")
    }
    return (
        <div className='parent'>
            <div className="main">
                <form>
                    <h3>Registration Form</h3>
                    <input type="text"
                        placeholder="Enter Your Name"
                        className='inputField'
                        id='userName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    /><br />

                    <input type='text'
                        placeholder="Enter Your Email"
                        className='inputField'
                        id='userEmail'
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)}
                        onInput={(e) => {
                            let pattern = /[a-z A-z 0-9 \.]+[@][a-z]+[\.]+[a-z]{1,3}/;

                            console.log(pattern.test(email))
                            if (pattern.test(email)) {
                                document.getElementById('email-err').style.display = 'none'
                            }
                            else {
                                document.getElementById('email-err').style.display = 'block'
                            }
                        }} /><br />
                    <p id='email-err'>Please enter a valid email id </p>
                    <button className='btn' style={{ backgroundColor: btnColor1 }}
                        onMouseEnter={() => setBtnColor1("lightgreen")}
                        onMouseOut={() => setBtnColor1("")}
                        onClick={handleClick}>Reset</button>
                    <button className='btn' style={{ backgroundColor: btnColor2 }}
                        onMouseEnter={() => setBtnColor2("lightgreen")}
                        onMouseOut={() => setBtnColor2("")}
                        onClick={handleClick}>Submit</button>

                    <br />
                    <div className='details'>
                        <p>Name : <i>{name}</i> </p>
                        <p>Email : <i>{email}</i></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login_form
