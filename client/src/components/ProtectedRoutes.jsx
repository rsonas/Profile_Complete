import { Navigate } from "react-router-dom";

// redirects any protected routes back to sign in page if user is not already logged in
export default function ProtectedRoute({children}) {

    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to= "/signin"/>
    }

    return children;
}
