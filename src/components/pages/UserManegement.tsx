import { FC, memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManegement: FC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();

    useEffect(() => getUsers(),[])
    return(
        <>
            {loading ? (
            <Center height="100vh">
                <Spinner />
            </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10}}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard imageUrl="https://source.unsplash.com/random" useNname={user.username} fullName={user.name}/>
                        </WrapItem>
                    ))}              
                </Wrap>
            )}
            
        </>
    )
})