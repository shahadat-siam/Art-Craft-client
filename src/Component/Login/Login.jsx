import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";

 
const Login = () => {

    const [error, setError] = useState()

    const {LogInUser} = UseAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const {email, password} = data 
        setError('')
        LogInUser(email, password)
        .then(result => {
            console.log(result.user)
            swal({
                title: "Great job!",
                text: "You have successfully logged in",
                icon: "success",
                button: "Done",
              }); 
            // if(result.user){
            //     navigate(from)
            // } 
        })
        .catch(error => {
            const err = error.message 
            setError(err)
        })
    }

    return (
        <div className="mt-6 p-3"> 
            <div className="w-96 mx-auto p-5 border border-gray-300 rounded-xl  bg-purple-50">
                <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col items-start">
                    <label htmlFor="email" className="font-semibold mt-2">Email:</label> 
                    <input type="email" className="w-full p-1 pl-3 rounded-[4px]" name="email" placeholder="enter your email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                    <label htmlFor="password" className="font-semibold mt-2">Password:</label>
                    <input type="password" className="w-full p-1 pl-3 rounded-[4px]" name="password" placeholder="enter your password"  {...register("password", { required: true })} />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <input type="submit" value='Log in' className="w-full bg-[#0E46A3] mt-4 text-white py-2 font-bold cursor-pointer rounded"/>
                </form>
                { 
                    error && <p className="text-red-500">{error}</p>
                }
                <p className="mt-3">New to website? <NavLink to='/register'> <span className="text-primary underline cursor-pointer">Resister.</span></NavLink></p> 
            
                <div className="flex flex-col mt-3 w-full"> 
                    <div className="divider">continue with</div> 
                </div>
            </div>
            
        </div>
    );
};

export default Login;