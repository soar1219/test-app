import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../types/spi/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const { shoeMessage } = useMessage();

    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = useCallback(() => {
        setLoading(true)
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data) 
        }).catch(() => {
            shoeMessage({ title: "ユーザー取得に失敗しました", status: "error" })
        }).finally(() => {
            setLoading(false)
        })
    }, [shoeMessage])

    return {getUsers, loading, users}
}