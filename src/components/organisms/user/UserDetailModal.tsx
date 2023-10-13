import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { User } from "../../../types/spi/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | null
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = props;

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUserName(user?.username ?? "")
        setName(user?.name ?? "")
        setEmail(user?.email ?? "")
        setPhone(user?.phone ?? "")

    }, [user])

    const onChangeUserName = (e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
    const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
    const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)

    const onclickUpdate = () => {
        alert()
    }

    return(
        <>
           <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
                <ModalOverlay />
                <ModalContent pb={2}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                            </FormControl>
                            <Input value={userName} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                            </FormControl>
                            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                            </FormControl>
                            <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                            </FormControl>
                            <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                        </Stack>
                    </ModalBody>
                    { isAdmin ?? (
                        <ModalFooter>
                            <PrimaryButton onClick={onclickUpdate}>更新</PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
})