import { Flex, FormControl, Input, FormHelperText, Button, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const EmailForm = ({ submitText }) => {
    return (
        <Flex as="form" w={['100%', null, '70%']} minWidth={['100%', null, '500px']} flexDir={['column', null, 'row']} justifyContent={['center', null, 'space-between']}>
            <FormControl mb='4' w={['100%', null, '75%']}>
                <Input type='email' placeholder='Enter your email' h='48px' bg='white' color='gray.500' borderColor='gray.300' boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05)' />
                <FormHelperText color='primary.500'>We care about your data in our <NextLink href='#' passHref><Link textDecoration='underline'>privacy policy</Link></NextLink></FormHelperText>
            </FormControl>
            <Button type='submit' variant='solid' size='xl' w={['100%', null, 'min-content']}>{submitText}</Button>
        </Flex>
    );
};

EmailForm.proptypes = {
    submitText: PropTypes.string.isRequired,
    desktopWidth: PropTypes.number
}

export default EmailForm;
