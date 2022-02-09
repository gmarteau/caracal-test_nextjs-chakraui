import { List, ListItem, Heading, Text, Button, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';

const FeaturesShortList = () => {
    return (
        <List spacing={0}>
            <ListItem p='5' borderLeft='solid 4px' borderColor='gray.100' _hover={{ borderColor: 'primary.600' }}>
                <Heading as='h3' mb={['2', null, '3']} fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} fontWeight='medium' color='gray.900'>
                    Share team inboxes
                </Heading>
                <Text fontSize='16px' lineHeight='24px' mb={['2', null, '3']}>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop in the hiri ng process.
                </Text>
                <NextLink href='#' passHref>
                    <Button as={Link} rightIcon={<ArrowForwardIcon />} variant='white' color='primary.700' fontSize='16px' lineHeight='24px' fontWeight='medium' p='0'>
                        Learn more
                    </Button>
                </NextLink>
            </ListItem>

            <ListItem p='5' borderLeft='solid 4px' borderColor='gray.100' _hover={{ borderColor: 'primary.600' }}>
                <Heading as='h3' mb={['2', null, '3']} fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} fontWeight='medium' color='gray.900'>
                    Deliver instant follow-ups
                </Heading>
                <Text fontSize='16px' lineHeight='24px' mb={['2', null, '3']}>
                    An all-in-one hiring platform that helps you balance everything your candidates need to be happy and comfortable throughout the process.
                </Text>
                <NextLink href='#' passHref>
                    <Button as={Link} rightIcon={<ArrowForwardIcon />} variant='white' color='primary.700' fontSize='16px' lineHeight='24px' fontWeight='medium' p='0'>
                        Learn more
                    </Button>
                </NextLink>
            </ListItem>

            <ListItem p='5' borderLeft='solid 4px' borderColor='gray.100' _hover={{ borderColor: 'primary.600' }}>
                <Heading as='h3' mb={['2', null, '3']} fontSize={['18px', null, '20px']} lineHeight={['28px', null, '30px']} fontWeight='medium' color='gray.900'>
                    Manage your team with reports
                </Heading>
                <Text fontSize='16px' lineHeight='24px' mb={['2', null, '3']}>
                    Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                </Text>
                <NextLink href='#' passHref>
                    <Button as={Link} rightIcon={<ArrowForwardIcon />} variant='white' color='primary.700' fontSize='16px' lineHeight='24px' fontWeight='medium' p='0'>
                        Learn more
                    </Button>
                </NextLink>
            </ListItem>
        </List>
    );
};

export default FeaturesShortList;
