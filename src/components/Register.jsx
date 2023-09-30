import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password,name);
    }


    return(
        <div>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                         
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                           <form onSubmit={handleRegister } > 
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold capitalize">Register</button>
                            </div>
                           </form>
                           <p>Already Have Account? Please <Link to={'/login'} ><button className="btn btn-link capitalize">Login</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;