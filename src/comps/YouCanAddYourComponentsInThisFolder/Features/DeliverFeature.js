import { Circle, Heading, Icon, Image, Text, List, ListItem, Flex, Box } from "@chakra-ui/react";
import { BsLightningCharge } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";

const DeliverFeature = () => {
    return (
        <Container h={['auto', null, '512px']} alignItems='center' my='10'>
            <Col display={['none', null, 'block']} colStart={1} colEnd={13} h='100%'>
                <Image src='/images/deliver-feat-img.png' alt='mobile phone screen showing user interface' objectFit='cover' w='100%' maxHeight='512px' />
            </Col>

            <Col colStart={[2, null, 15]} colEnd={[26, null, 25]}>
                <Circle size='50px' bg='primary.100' color='primary.600' border='solid 8px' borderColor='primary.50'>
                    <Icon as= {BsLightningCharge} w='22px' h='22px' />
                </Circle>

                <Heading as='h3' my='3' fontSize={['24px', null, '30px']} fontWeight='semibold' lineHeight={['32px', null, '38px']} color='gray.900'>
                    Deliver instant answers
                </Heading>
                <Text fontSize={['16px', null, '18px']} lineHeight={['24px', null, '28px']}>
                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                </Text>

                <List spacing={3} py='10' pl={['2', null, '5']}>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Keep your customers in the loop with live chat
                    </ListItem>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Embed help articles right on your website
                    </ListItem>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Customers never have to leave the page to find an answer
                    </ListItem>
                </List>
            </Col>
            <Col display={['block', null, 'none']} colStart={1} colEnd={27}>
                <Image src='/images/deliver-feat-img-mobile.png' alt='mobile phone screen showing user interface' objectFit='cover' w='100%' />
            </Col>
        </Container>
    );
};

export default DeliverFeature;