import { Heading, Text, Image } from "@chakra-ui/react";

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";
import EmailForm from "./elements/EmailForm";

const Hero = () => {
    return (
        <Container bg='primary.50' h={['auto', null, '800px']} alignItems='center' pt={['10']} pb={['5']}>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 18]} py={['5']} zIndex='1'>
                <Heading as='h1' mb={['4', null, '5']} color='primary.900' fontSize={['36px', null, '60px']} fontWeight='semibold' lineHeight={['44px', null, '72px']} letterSpacing='-1px'>
                    Customer service software for customer-first teams
                </Heading>
                <Text w={['100%', null, '60%']} color='primary.700' fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} mb='7'>
                    The best customer service software for customer-first teams. Industry-leading email and live chat support.
                </Text>
                <EmailForm submitText='Get started' />
            </Col>
            
            <Col colStart={[2, null, 18]} colEnd={[26, null, 25]} h={['auto', null, '640px']} my={['10']} position='relative'>
                <Image display={['block', null, 'none']} src='/images/hero-mobile.png' alt='Creative guy working' objectFit='cover' width='100%' />
                <Image display={['none', null, 'block']} h='640px' minWidth='560px' position='absolute' right='0' zIndex='0' src='/images/hero-desktop.png' alt='Creative guy working' objectFit='cover' />
                <Image display={['none', null, 'block']} src='/images/hand-drawn-arrow.png' position='absolute' bottom='12%' right='80%' />
            </Col>    
        </Container>
    );
};

export default Hero;