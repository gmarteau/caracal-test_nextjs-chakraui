import { Flex, Heading, Text } from "@chakra-ui/react";
import Col from "_comps/Layout/Col";
import Container from "_comps/Layout/Container";
import EmailForm from "./elements/EmailForm";

const NewsletterCTA = () => {
    return (
        <Container as='aside' bg='primary.50' py={['60px', null, '80px']}>
            <Col colStart={[2, null, 3]} colEnd={[26, null, 14]}>
                <Heading as='h3' fontSize={['30px', null, '36px']} fontWeight='semibold' lineHeight={['38px', null, '44px']} color='primary.900' mb='5'>
                    Sign up four our newsletter
                </Heading>
                <Text color='primary.700' fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} mb={['8', null, '0']}>
                    Be the first to know about releases and industry news and insights.
                </Text>
            </Col>

            <Col colStart={[2, null, 14]} colEnd={[26, null, 25]}>
                <Flex justifyContent={['flex-end']}>
                    <EmailForm submitText='Subscribe' />
                </Flex>
            </Col>
        </Container>
    );
};

export default NewsletterCTA;
