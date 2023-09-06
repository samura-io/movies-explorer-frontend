import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element: Component, ...props}) => {

    // console.log(props.loggedIn)

    return (
        props.loggedIn ?
        <Component {...props} /> :
        <Navigate to='/signin' replace />
    )
};

export default ProtectedRoute;