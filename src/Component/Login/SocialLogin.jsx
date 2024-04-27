import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hook/UseAuth";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";

 
const SocialLogin = () => {

    const {googleLogin, githubLogin} = UseAuth()

    //------ nevigation system------
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const hundleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            console.log(result.user) 
            navigate(from)
            swal({
                title: "Great job!",
                text: "You have successfully logged in",
                icon: "success",
                button: "Done",
              }); 
        })
    } 
    return (
        <div>
            <p  onClick={() => hundleSocialLogin(googleLogin)}  className="text-2xl cursor-pointer flex justify-center items-center gap-2 space-y-2"><FcGoogle/> <span className="text-[16px] font-semibold text-[#0E46A3]">Login with Google</span> </p>
            <p onClick={() => hundleSocialLogin(githubLogin)}  className="text-2xl cursor-pointer flex justify-center items-center gap-2 space-y-2"><FaGithub/> <span className="text-[16px] font-semibold text-[#0E46A3]">Login with Github</span></p>
        </div>
    );
};

export default SocialLogin;