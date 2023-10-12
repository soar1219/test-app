import { FC, memo } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenueIconButton } from "../../atoms/button/MenueIconButton";
import { MenueDrawer } from "../../molecures/MenueDrawer";
import { useNavigate } from "react-router-dom";


export const Header: FC = memo(() => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const history = useNavigate();

    return(
        <>
            <Flex as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{base: 3, md: 5}}
                >
                <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={() => history("/home")}>
                    <Heading as="h1" fontSize={{base: "md" , md:"lg"}}>ユーザー管理アプリ</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{base: "none" ,md: "flex"}}>
                    <Box pr={4}>
                        <Link onClick={() => history("/home/user-manegemant")}>ユーザー一覧</Link>
                    </Box>
                    <Link onClick={() => history("/setting")}>設定</Link>
                </Flex>
                <MenueIconButton onOpen={onOpen} />
                <MenueDrawer isOpen={isOpen} onClose={onClose} />
            </Flex>
            
        </>
    )
})