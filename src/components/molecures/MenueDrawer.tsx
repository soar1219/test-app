import { FC, memo } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
    onClose: () => void;
    isOpen: boolean
}

export const MenueDrawer: FC<Props> = memo((props) => {

    const { onClose , isOpen } = props;
    const history = useNavigate();

    const handleHomeClick = () => {
        history("/home");
        onClose(); 
    };

    const handleUserManagementClick = () => {
        history("/home/user-management");
        onClose(); 
    };

    const handleSettingClick = () => {
        history("/setting");
        onClose(); 
    };

    return(
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100" >
                        <Button onClick={handleHomeClick} w="100%">TOP</Button>
                        <Button onClick={handleUserManagementClick} w="100%">ユーザー一覧</Button>
                        <Button onClick={handleSettingClick} w="100%">設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})