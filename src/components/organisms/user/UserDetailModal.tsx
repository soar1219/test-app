import { FC, memo } from "react";
import { Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const {isOpen, onClose } = props;
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
                            <Input value="つばさ" isReadOnly />
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                            </FormControl>
                            <Input value="tsubasa suzuki" isReadOnly />
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                            </FormControl>
                            <Input value="test@gmail.com" isReadOnly />
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                            </FormControl>
                            <Input value="000-0000-0000" isReadOnly />
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})