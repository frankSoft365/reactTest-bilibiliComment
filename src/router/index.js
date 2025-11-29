import Login from "../pages/Login";
import Article from "../pages/Article";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    }
]);

export default router;