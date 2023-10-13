import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManegement: FC = memo(() => {
    return(
        <Wrap p={{ base: 4, md: 10}}>
            <WrapItem>
                <UserCard imageUrl="https://source.unsplash.com/random" useNname="ツバサ" fullName="鈴木 翔"/>
            </WrapItem>
        </Wrap>
    )
})