import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const RequireAuth = ({ loggedIn, children }) => {
    console.log("loggedIn", loggedIn);
    return loggedIn ? children : <Navigate to="/sign-in"/>;
};

export default RequireAuth; 