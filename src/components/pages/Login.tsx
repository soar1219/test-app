import { FC, memo } from "react";
import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

export const Login: FC = memo(() => {
    return(
        <Flex align="center" justify="center" height="100vh">
            <Box backgroundColor="white" width="sm" padding={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">
                    ユーザー管理アプリ
                </Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" />
                    <Button backgroundColor="teal.400" color="white" _hover={{opacity:"0.8"}}>ログイン</Button>
                </Stack>
            </Box>
        </Flex>
    )
})