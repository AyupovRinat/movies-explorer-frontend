import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes (props) {
	return (
		props.isLoggedIn
			?	<Outlet/>
			: <Navigate to="/" replace />
	)
}

export default ProtectedRoutes;