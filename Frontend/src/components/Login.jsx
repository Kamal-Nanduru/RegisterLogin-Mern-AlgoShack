import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
               if(result.data==="Success"){
                navigate('/home')
               }
               else{
                alert("Invalid Email or Password")
               }
                
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white rounded p-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div> */}
                    <div className="mb-3">
                        <label htm1For="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        LogIn
                    </button>
                </form>
                {/* <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link> */}
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Back To Register Page
                </Link>
            </div>
        </div>
    );
}

export default Login;


