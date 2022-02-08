import { Box, Heading, Text } from "@chakra-ui/react";
import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";
import DeliverFeature from "./Features/DeliverFeature";
import ManageFeature from "./Features/ManageFeature";
import ShareFeature from "./Features/ShareFeature";

const Features = () => {
    return (
        <Box as='section'>
            <Container pt={['10']}>
                <Col colStart={2, null, 3} colEnd={26, null, 25} align='center' py='5' my={['0', null, '10']}>
                    <Text fontSize={['14px', null, '16px']} fontWeight='semibold' lineHeight={['20px', null, '24px']} mb={['2']} color='primary.700'>
                        Features
                    </Text>
                    <Heading as='h2' fontSize={['30px', null, '36px']} fontWeight='semibold' lineHeight={['38px', null, '44px']} mb={['5']} color='gray.900'>
                        Beautiful analytics to grow smarter
                    </Heading>
                    <Text fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} w={['100%', null, '70%']}>
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </Text>
                </Col>
            </Container>

            <ShareFeature />
            <DeliverFeature />
            <ManageFeature />
        </Box>
    );
};

export default Features;
