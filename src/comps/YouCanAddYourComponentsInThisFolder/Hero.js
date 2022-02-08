import { FormControl, FormHelperText, Heading, Input, Text, Link, Box, Button, Image, Flex } from "@chakra-ui/react";
import NextLink from 'next/link';

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";

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
                <Flex as="form" w={['100%', null, '70%']} flexDir={['column', null, 'row']} justifyContent={['center', null, 'space-between']}>
                    <FormControl mb='4' w={['100%', null, '75%']}>
                        <Input type='email' placeholder='Enter your email' h='48px' bg='white' color='gray.500' borderColor='gray.300' boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05)' />
                        <FormHelperText color='primary.500'>We care about your data in our <NextLink href='#' passHref><Link textDecoration='underline'>privacy policy</Link></NextLink></FormHelperText>
                    </FormControl>
                    <Button type='submit' variant='solid' size='xl' w={['100%', null, 'min-content']}>Get started</Button>
                </Flex>
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