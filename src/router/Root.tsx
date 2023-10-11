import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManegement } from "../components/pages/UserManegement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const Root: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/user-manegemant" element={<UserManegement />} />
            <Route path="/setting" element={<Setting />} />
            <Route path='/*' element={<Page404/>} />
        </Routes>
    )
}) 