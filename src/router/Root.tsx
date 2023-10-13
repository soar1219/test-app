import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManegement } from "../components/pages/UserManegement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Root: FC = memo(() => {
    return (
            <LoginUserProvider>
                <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<HeaderLayout><Home /></HeaderLayout>} />
                        <Route path="/home/user-manegemant" element={<HeaderLayout><UserManegement /></HeaderLayout>} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path='/*' element={<Page404/>} />
                </Routes>
            </LoginUserProvider>
    )
}) 