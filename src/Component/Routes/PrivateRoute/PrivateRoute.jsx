import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";

 
const PrivateRoute = ({children}) => {
    
    const {user, loading} = UseAuth()
    const location = useLocation()
    
    if(loading){
        console.log('loading done')
        return <div className="h-[70vh] w-full flex items-center justify-center"><span className="loading loading-spinner loading-lg text-warning"></span></div>
    }
    if(!user) {
        console.log('user comming soon')
        return  <Navigate state={location?.pathname} to='/login'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
    
};

export default PrivateRoute;