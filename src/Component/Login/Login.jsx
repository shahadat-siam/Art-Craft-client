import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";
import SocialLogin from "./SocialLogin";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

 
const Login = () => {

    const [error, setError] = useState()
    const [showPassword, setShowPassword] = useState(false)
     
    //------ nevigation system------
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const {LogInUser} = UseAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const {email, password} = data 
        setError('')
        LogInUser(email, password)
        .then(result => {
            console.log(result.user)
            //---- nnavigate after login
            navigate(from)
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
            <div className="w-80 mx-auto p-5 border rounded-sm border-gray-300  bg-purple-50">
                <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col items-start">
                    <label htmlFor="email" className="font-semibold mt-2">Email:</label> 
                    <input type="email" className="w-full outline-none p-1 pl-3 rounded-[4px]" name="email" placeholder="enter your email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                    <div className="w-full flex flex-col items-start relative mt-2"> 
                        <label htmlFor="password" className="font-semibold ">Password:</label>
                        <input type={showPassword ? "text" : "password"} className="w-full outline-none p-1 pl-3 rounded-[4px]" name="password" placeholder="enter your password" {...register("password", { required: true })} />
                        <span onClick={() => setShowPassword(!showPassword)} className=" absolute right-5 bottom-2  cursor-pointer">
                            {
                            showPassword ? <RxEyeOpen/> : <RxEyeClosed/> 
                            }
                        </span>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                     </div>
                    <input type="submit" value='Log in' className="w-full bg-[#0E46A3] mt-4 text-white py-2 font-bold cursor-pointer rounded"/>
                </form>
                { 
                    error && <p className="text-red-500">{error}</p>
                } 
                <div className="flex flex-col mt-3 w-full"> 
                    <div className="divider">OR</div> 
                </div> 

                <div>
                    <SocialLogin/>
                </div>
            </div>

            <div className="rounded-sm p-4 border border-gray-200 w-80 mx-auto bg-purple-50 mt-2">
                <p className=" text-center">Don't have an account? <NavLink to='/register'> <span className="text-[#0E46A3] underline cursor-pointer">Resister.</span></NavLink></p> 
            </div> 
        </div>
    );
};

export default Login;