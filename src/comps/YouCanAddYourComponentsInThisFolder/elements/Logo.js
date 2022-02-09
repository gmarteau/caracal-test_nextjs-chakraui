import { Flex, Box, Text, Circle } from "@chakra-ui/react";

import Col from "_comps/Layout/Col";

const Logo = () => {
    return (
        <Col colStart={[2, null, 3]} colEnd={[14, null, 6]}>
            <Flex w='100%' alignItems='center' justifyContent='flex-start'>
                <Box w='32px' h='32px' borderRadius='8px' bg='linear-gradient(180deg, #FFFFFF 0%, #D0D5DD 100%)' d='flex' alignItems='center' justifyContent='center' position='relative' filter='drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1)) drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06))'>
                    <Circle size='16px' bg='linear-gradient(26.57deg, #191E9A 8.33%, #1D24B9 91.67%)' />
                    <Box position='absolute' bottom='0' w='32px' h='16px' borderRadius='0 0 8px 8px' bg='rgba(255, 255, 255, 0.2)' backdropFilter='blur(5px)' />
                </Box>
                <Text fontSize='lg' fontWeight='semibold' pl='2' color='gray.900'>
                    Untitled UI
                </Text>
            </Flex>
        </Col>
    );
};

export default Logo;
