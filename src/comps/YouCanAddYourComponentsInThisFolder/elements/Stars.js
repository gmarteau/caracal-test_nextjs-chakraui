import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
    return (
        <Flex pb={['0', null, '2']}>
            <StarIcon w='20px' h='20px' color={ rating >= 1 ? 'warning.300' : 'gray.300' } mr='2' />
            <StarIcon w='20px' h='20px' color={ rating >= 2 ? 'warning.300' : 'gray.300' } mr='2' />
            <StarIcon w='20px' h='20px' color={ rating >= 3 ? 'warning.300' : 'gray.300' } mr='2' />
            <StarIcon w='20px' h='20px' color={ rating >= 4 ? 'warning.300' : 'gray.300' } mr='2' />
            <StarIcon w='20px' h='20px' color={ rating >= 5 ? 'warning.300' : 'gray.300' } mr='2' />
        </Flex>
    );
};

Stars.propTypes = {
    rating: PropTypes.number
};

export default Stars;
