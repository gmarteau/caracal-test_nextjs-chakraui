import { Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";

const JoinCTA = () => {
    return (
        <Container as='aside' pt={['7', null, '0']} pb={['10']} mb={['5', null, '10']}>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 14]} h={['auto', null, '480px']} p={['8', null, '80px']} bg='primary.800' borderRadius={['16px 16px 0 0', null, '24px 0 0 24px']}>
                <Flex flexDir='column' h='100%' justifyContent='center'>
                    <Heading as='h3' color='white' fontSize={['30px', null, '36px']} fontWeight='semibold' lineHeight={['38px', null, '44px']} mb={['5']}>
                        Join 4,000+ startups growing with Untitled
                    </Heading>
                    <Text color='gray.300' fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} mb={['5', null, '10']}>
                        Start your 30-day free trial today.
                    </Text>

                    <Flex flexDir={['column', null, 'row']} alignItems={[null, null, 'center']} justifyContent={['flex-start']}>
                        <Button my={['0', null, '0']} mb={['3', null, '0']} order={[2, null, 1]} variant='white'>
                            Learn more
                        </Button>
                        <Button mb={['0', null, '0']} my={['3', null, '0']} ml={['0', null, '5']} order={[1, null, 2]}>
                            Get started
                        </Button>
                    </Flex>
                </Flex>
            </Col>

            <Col colStart={[2, null, 14]} colEnd={[26, null, 25]} h={['208px', null, '480px']} borderRadius={['0 0 16px 16px', null, '0 24px 24px 0']} bg='primary.800' overflow='hidden' position='relative'>
                <Image src='/images/join-cta-img.png' alt='untitled app on screen' objectFit='cover' w='100%' position='absolute' top={['0', null, '12%']} left={['10%']} />
            </Col>
        </Container>
    );
};

export default JoinCTA;
