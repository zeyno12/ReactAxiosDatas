import React from 'react'
import { useState } from 'react'
import PasswordStrengthBar from 'react-password-strength-bar';

const Login = () => {
    const [name, setName] = useState('')
    const [password1, setPassword] = useState("");
    return (
        <section>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6'>
                        <form>
                            <label htmlFor='name'>UserName</label>
                            {(() => {
                                if (name.length < 4 && name.length > 0) {
                                    return (
                                        <input style={{ border: '2px solid gold', boxShadow: " 0px 0px 3px 0px red" }} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter the name' />
                                    )
                                } else if (name.length < 8 && name.length > 4) {
                                    return (
                                        <input style={{ border: '2px solid gold', boxShadow: " 0px 0px 3px 0px gold" }} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter the name' />
                                    )
                                } else {
                                    return (
                                        <input style={{ border: '2px solid gold', boxShadow: " 0px 0px 3px 0px green" }} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter the name' />
                                    )
                                }
                            })()}
                            <label htmlFor='password'>Password</label>
                            {/* <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='enter the password' /> */}
                            <input onChange={(e) => setPassword(e.target.value)} />
                            <PasswordStrengthBar
                             barColors={[
                                "#a31c00",
                                "#FFB829",
                                "#009200",
                                "#009200",
                                "#009200",
                                "#009200"
                              ]}
                            
                            password={password1} />
                            <button className='w-100 p-3 mt-4 border-3 btn btn-dark'>Log In</button>
                        </form>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Login