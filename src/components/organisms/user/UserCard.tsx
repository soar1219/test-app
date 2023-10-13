import { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
    imageUrl: string;
    useNname:string;
    fullName:string;
    onClick: () =>  void
}

export const UserCard: FC<Props> = memo((props) => {
    const { imageUrl, useNname, fullName, onClick } = props;
    return(
        <>
           <Box w="260px" height="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{opacity:"0.8", cursor:"pointer"}} onClick={onClick}>
                <Stack textAlign="center">
                    <Image m="auto" alt="プロフィール画像" borderRadius="50%" boxSize="160px" src={imageUrl} />
                    <Text fontSize="lg" fontWeight="bold">{useNname}</Text>
                    <Text fontSize="sm" color="gray">{fullName}</Text>
                </Stack>
            </Box>
        </>
    )
})