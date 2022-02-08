import { Circle, Heading, Icon, Image, Text, List, ListItem, Flex, Box } from "@chakra-ui/react";
import { FiMail } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";

const ShareFeature = () => {
    return (
        <Container h={['auto', null, '512px']} alignItems='center' my='10'>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 13]}>
                <Circle size='50px' bg='primary.100' color='primary.600' border='solid 8px' borderColor='primary.50'>
                    <Icon as= {FiMail} w='22px' h='22px' />
                </Circle>

                <Heading as='h3' my='3' fontSize={['24px', null, '30px']} fontWeight='semibold' lineHeight={['32px', null, '38px']} color='gray.900'>
                    Share team inboxes
                </Heading>
                <Text fontSize={['16px', null, '18px']} lineHeight={['24px', null, '28px']}>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                </Text>

                <List spacing={3} py='10' pl={['2', null, '5']}>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Leverage automation to move fast
                    </ListItem>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Always give customers a human to chat to
                    </ListItem>
                    <ListItem d='flex' justifyContent='flex-start' alignItems='center'>
                        <Flex bg='primary.100' borderRadius='50%' minWidth='28px' minHeight='28px' justifyContent='center' alignItems='center' mr='3'>
                            <Icon as={AiOutlineCheck} color='primary.500' />
                        </Flex>
                        Automate customer support and close leads faster
                    </ListItem>
                </List>
            </Col>
            <Col colStart={[1, null, 15]} colEnd={[27, null, 27]}>
                <Image display={['none', null, 'block']} src='/images/share-feat-img.jpg' alt='screen showing user interface' objectFit='cover' w='100%' h='512px' />
                <Image display={['block', null, 'none']} src='/images/share-feat-img-mobile.png' alt='screen showing user interface' objectFit='cover' w='100%' />
            </Col>
        </Container>
    );
};

export default ShareFeature;