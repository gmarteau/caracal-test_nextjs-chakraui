import { Text, Heading, Image, Box } from "@chakra-ui/react";

import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";
import FeaturesShortList from "./FeaturesShort/FeaturesShortList";

const FeaturesShort = () => {
    return (
        <Container as='section'>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 25]} my={['10']}>
                <Text fontSize={['14px', null, '16px']} fontWeight='semibold' lineHeight={['20px', null, '24px']} mb={['2']} color='primary.700'>
                    Hire Faster
                </Text>
                <Heading as='h2' fontSize={['30px', null, '36px']} fontWeight='semibold' lineHeight={['38px', null, '44px']} mb={['5']} color='gray.900'>
                    A seamless experience for candidates
                </Heading>
                <Text fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} w={['100%', null, '70%']}>
                    Treat candidates with a rich careers site and a wonderful application process.
                </Text>
            </Col>

            <Col colStart={[2, null, 3]} colEnd={[26, null, 13]} mt={['0', null, '10']}>
                <FeaturesShortList />
            </Col>

            <Col colStart={[1, null, 15]} colEnd={[27, null, 27]} mt={['10']} position='relative' align={['center']}>
                <Image display={['none', null, 'block']} src='/images/features-short-desktop.png' alt='untitled app on desktop' objectFit='cover' w='100%' transform='translateX(35px)' />
                <Image display={['none', null, 'block']} src='/images/features-short-phone.png' alt='untitled app on mobile phone' objectFit='cover' position='absolute' bottom='0' left='-35px' />
                <Image display={['block', null, 'none']} src='/images/features-short-phone-mobile.png' alt='untitled app on mobile phone' objectFit='cover' />
            </Col>
        </Container>
    );
};

export default FeaturesShort;
