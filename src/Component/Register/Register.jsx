import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx"; 
import swal from "sweetalert";
import SocialLogin from "../Login/SocialLogin";

 
const Register = () => {

     
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const {createUser} =  UseAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {  
        // console.log(data)
        const {email, password, image, FullName} = data;
        console.log(email,password,image,FullName)

        setError(''); 

        if(password.length < 6) {
            setError('password should be 6 char')
            return
        }
        else if(! /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            setError('password at least one upper case & lower case latter')
            return
        }

        createUser(email,password)
        .then((result) => {  
            console.log(result) 
            swal({
                title: "Good job!",
                text: "You have successfully created account",
                icon: "success",
                button: "Aww yiss!",
              });  
        })
        .catch((error) => {
            console.log(error.message); 
            setError(error.message);  
        });
    } 

    return (
        <div className="mt-6 "> 
            <div className="w-80 mx-auto bg-purple-50 border  border-gray-300  p-6 rounded  ">
                <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start  ">
                    <label htmlFor="name" className="font-semibold mt-2">Name:</label>
                    <input type="text"  className="w-full outline-none p-1 pl-3 rounded-[4px]" name="name" placeholder="enter your name" {...register("FullName", { required: true })} />
                    {errors.FullName && <span className="text-red-500">This field is required</span>}
                    <label htmlFor="email" className="font-semibold mt-2">Email:</label>
                    <input type="email" className="w-full outline-none p-1 pl-3 rounded-[4px]" name="email" placeholder="enter your email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                    <label htmlFor="photo" className="font-semibold mt-2">Photo Url:</label>
                    <input type="url" className="w-full outline-none p-1 pl-3 rounded-[4px]" name="photo" placeholder="enter your photo url" {...register("image", { required: true })}  />
                    {errors.image && <span className="text-red-500">This field is required</span>}
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
                    <input type="submit" value='Resister' className="w-full bg-[#D20062] mt-3 text-white py-2 font-bold cursor-pointer rounded"/>
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
                <p className="text-center">Already have an account? <NavLink to='/login'> <span className="text-[#0E46A3] underline cursor-pointer">Log in.</span></NavLink></p> 
            </div> 
        </div>
    );
};

export default Register;