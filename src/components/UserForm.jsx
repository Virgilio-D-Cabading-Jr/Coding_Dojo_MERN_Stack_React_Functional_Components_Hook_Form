import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setFirstNameError("First Name must be at least 3 characters or longer!");
        } else {
            setFirstNameError('');
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setLastNameError("Last Name must be at least 3 characters or longer!");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 3)) {
            setEmailError("Email must be at least 3 character or longer!");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if ((e.target.value.length > 0) && (e.target.value.length < 8)) {
            setPasswordError("Passsword must be at least 8 characters in length!");
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if ( password === e.target.value ) {
            setConfirmPasswordError('');
        } else if (password !== e.target.value) {
            setConfirmPasswordError("Passwords must match!")
        }
    }

    return (
        <div className="row">
            <form className="col-10 bg-primary" onSubmit={createUser}>
                <div className="form-group">
                    <label for="firstName">First Name: </label>
                    <input id="firstName" className="form-control" type="text" onChange={(e) => handleFirstName(e)} />
                    <strong>
                        {
                            firstNameError
                                ? <p style={{ color: 'red' }}>{firstNameError}</p>
                                : ''
                        }
                    </strong>
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name: </label>
                    <input id="lastName" className="form-control" type="text" onChange={(e) => handleLastName(e)} />
                    <strong>
                        {
                            lastNameError
                                ? <p style={{ color: 'red' }}>{lastNameError}</p>
                                : ''
                        }
                    </strong>
                </div>
                <div className="form-group">
                    <label for="email">Email Address: </label>
                    <input id="email" className="form-control" type="text" onChange={(e) => handleEmail(e)} />
                    <strong>
                        {
                            emailError
                                ? <p style={{ color: 'red' }}>{emailError}</p>
                                : ''
                        }
                    </strong>
                </div>
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input id="password" className="form-control" type="text" onChange={(e) => handlePassword(e)} />
                    <strong>
                        {
                            passwordError
                                ? <p style={{ color: 'red' }}>{passwordError}</p>
                                : ''
                        }
                    </strong>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password: </label>
                    <input id="confirmPassword" className="form-control" type="text" onChange={(e) => handleConfirmPassword(e)} />
                    <strong>
                        {
                            confirmPasswordError
                                ? <p style={{ color: 'red' }}>{confirmPasswordError}</p>
                                : ''
                        }
                    </strong>
                </div>
                <input className="btn btn-sm bg-success"type="submit" value="Create User" />
            </form>
            <p></p>
            <div>
                <h1>Your Form Data</h1>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Password: </strong>{password}</p>
                <p><strong>ConfirmPassword: </strong>{confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;