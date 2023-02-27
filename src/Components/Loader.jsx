import React from 'react';
import { Spinner, Box, VStack } from '@chakra-ui/react';

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'xl'} color={'teal'} />
      </Box>
    </VStack>
  );
};

export default Loader;
