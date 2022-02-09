import { AiOutlineLine } from "react-icons/ai";
import { Text, Icon, Circle, Flex, Image } from "@chakra-ui/react";

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";
import Stars from "./elements/Stars";

const Quote = () => {
    return (
        <Container as='aside' py='10' my='10'>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 16]} p={['8', null, '80px']} bg='gray.100' borderRadius={['16px 16px 0 0', null, '24px 0 0 24px']}>
                <Stars rating={5} />
                <Text fontSize={['24px', null, '36px']} lineHeight={['32px', null, '44px']} fontWeight='medium' color='gray.900' my='5'>
                    Untitled has saved us thousands of hours of work. We’re able to attract talent and close hires much faster.
                </Text>
                <Text d='flex' fontSize='18px' lineHeight='28px' fontWeight='medium' color='gray.900' alignItems='center' py='1'>
                    <Icon as={AiOutlineLine} mr='2' />
                    Renee Wells
                </Text>
                <Text fontSize='16px' lineHeight='24px'>
                    Hiring Manager, Quotient
                </Text>
                <Flex my={['3', null, '5']} pt={['4', null, '5']}>
                    <Circle size='10px' bg='gray.900' mr='3' />
                    <Circle size='10px' bg='gray.300' mr='3' />
                    <Circle size='10px' bg='gray.300' mr='3' />
                </Flex>
            </Col>

            <Col colStart={[2, null, 16]} colEnd={[26, null, 25]} borderRadius={['0 0 16px 16px', null, '0 24px 24px 0']} overflow='hidden'>
                <Image src='/images/quote-img.png' alt='young woman looking serene' objectFit='cover' w='100%' h={['280px', null, 'auto']} />
            </Col>
        </Container>
    );
};

export default Quote;
