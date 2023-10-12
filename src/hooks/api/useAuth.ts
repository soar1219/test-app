import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../../types/spi/user"
import { useNavigate } from "react-router-dom";



export const useAuth = () => {
    const history = useNavigate();
    const [loading, setLoading] = useState(false);

    const login = useCallback((id: string) => { 
        setLoading(true)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data) {
                history("/home")
            }else {
                alert("ユーザーが見つかりません")
            }
        }).catch(() => alert("ログインできません")).finally(() => {setLoading(false)})
    }, [ history])
    return { login , loading} 
}