import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";

const FreeTrialCTA = ({}) => {
    return (
        <Container as='aside' py={['5', null, '7']} mb={['10']}>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 25]} bg='primary.800' borderRadius='16px' p={['5', null, '10']}>
                <Flex flexDir={['column', null, 'row']} justifyContent={['flex-start', null, 'space-between']}>
                    <Box mb='5'>
                        <Heading as='h3' color='white' fontSize='30px' fontWeight='semibold' lineHeight='38px' my='3'>
                            Start your <Box as='span' display={['none', null, 'inline']}>30-day </Box>free trial
                        </Heading>
                        <Text color='gray.300' fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']}>
                            Get up and running in less than 5 minutes.
                        </Text>
                    </Box>

                    <Flex flexDir={['column', null, 'row']} alignItems={[null, null, 'center']} justifyContent={['flex-start', null, 'flex-end']}>
                        <Button my={['0', null, '0']} mb={['3', null, '0']} order={[2, null, 1]} variant='white'>
                            Learn more
                        </Button>
                        <Button mb={['0', null, '0']} my={['3', null, '0']} ml={['0', null, '5']} order={[1, null, 2]}>
                            Get started
                        </Button>
                    </Flex>
                </Flex>
            </Col>
        </Container>
    );
};

export default FreeTrialCTA;
