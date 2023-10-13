import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../../types/spi/user"
import { useNavigate } from "react-router-dom";
import { useMessage } from "../useMessage";
import { useLoginUser } from "../useLoginUser";



export const useAuth = () => {
    const history = useNavigate();
    const { shoeMessage } = useMessage();
    const { setLoginUser } = useLoginUser();
    const [loading, setLoading] = useState(false);

    const login = useCallback((id: string) => { 
        setLoading(true)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data) {
                const isAdmin = res.data.id === 10 ? true : false;
                setLoginUser({...res.data , isAdmin});
                shoeMessage({ title: "ログインしました", status:"success"})
                history("/home")
            }else {
                shoeMessage({ title: "ユーザーが見つかりません", status:"error"})
                setLoading(false);
            }
        }).catch(() => shoeMessage({ title: "ログインできません", status:"error"}))
        setLoading(false);
    }, [ history, shoeMessage, setLoginUser])
    return { login , loading} 
}