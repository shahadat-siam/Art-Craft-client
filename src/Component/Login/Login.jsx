import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

 
const Login = () => {
    // const {LogInUser} = UseAuth()
    return (
        <div className="mt-6 p-3"> 
            <div className="w-96 mx-auto p-5 border border-gray-300 rounded-xl  bg-purple-50">
                <form className="flex flex-col items-start">
                    <label htmlFor="email" className="font-semibold mt-2">Email:</label> 
                    <input type="email" className="w-full p-1 pl-3 rounded-[4px]" name="email" placeholder="enter your email"/>
                    <label htmlFor="password" className="font-semibold mt-2">Password:</label>
                    <input type="password" className="w-full p-1 pl-3 rounded-[4px]" name="password" placeholder="enter your password"  />
                    <input type="submit" value='Log in' className="w-full bg-[#0E46A3] mt-4 text-white py-2 font-bold cursor-pointer rounded"/>
                </form>
                <p className="mt-3">New to website? <NavLink to='/register'> <span className="text-primary underline cursor-pointer">Resister.</span></NavLink></p> 
            
                <div className="flex flex-col mt-3 w-full"> 
                    <div className="divider">continue with</div> 
                </div>
            </div>
            
        </div>
    );
};

export default Login;