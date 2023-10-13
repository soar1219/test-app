import { FC, memo, useCallback, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem, useDisclosure, } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManegement: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, loading, users } = useAllUsers();

    useEffect(() => getUsers(),[])

    const onClickUser = useCallback(() => {
        onOpen();
    },[onOpen])

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
                            <UserCard imageUrl="https://source.unsplash.com/random" useNname={user.username} fullName={user.name} onClick={onClickUser}/>
                        </WrapItem>
                    ))}              
                </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    )
})