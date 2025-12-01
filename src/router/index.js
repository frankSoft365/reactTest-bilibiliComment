import Login from "../pages/Login";
import Article from "../pages/Article";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/About";
import Board from "../pages/Board";
import NotFound from "../pages/NotFound";
import Month from "@/pages/Month";
import Year from "@/pages/Year";
import New from "@/pages/New";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: 'board',
                element: <Board />
            },
            {
                path: 'month',
                element: <Month />
            },
            {
                path: 'year',
                element: <Year />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '/new',
        element: <New />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;