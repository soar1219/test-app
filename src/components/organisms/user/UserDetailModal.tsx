import { FC, memo } from "react";
import { Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { User } from "../../../types/spi/user";

type Props = {
    user: User | null
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const { user, isOpen, onClose } = props;
    return(
        <>
           <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
                <ModalOverlay />
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                            </FormControl>
                            <Input value={user?.username} isReadOnly />
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                            </FormControl>
                            <Input value={user?.name} isReadOnly />
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                            </FormControl>
                            <Input value={user?.email} isReadOnly />
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                            </FormControl>
                            <Input value={user?.phone} isReadOnly />
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})