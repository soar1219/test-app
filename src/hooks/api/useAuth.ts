import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../../types/spi/user"
import { useNavigate } from "react-router-dom";
import { useMessage } from "../useMessage";



export const useAuth = () => {
    const history = useNavigate();
    const { shoeMessage } = useMessage();
    const [loading, setLoading] = useState(false);

    const login = useCallback((id: string) => { 
        setLoading(true)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data) {
                shoeMessage({ title: "ログインしました", status:"success"})
                history("/home")
            }else {
                shoeMessage({ title: "ユーザーが見つかりません", status:"error"})
            }
        }).catch(() => shoeMessage({ title: "ログインできません", status:"error"})).finally(() => {setLoading(false)})
    }, [ history, shoeMessage])
    return { login , loading} 
}