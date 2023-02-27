import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import mainlogo from '../assets/mainlogo.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box w={'full'} h={'100vh'} bgColor={'blue.900'}>
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        letterSpacing={'widest'}
        fontFamily={'Bebas Neue'}
        color={'white'}
      >
        Crypto-Hunt
      </Text>
      <motion.div
        style={{
          height: '60vh',
        }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image w={'full'} h={'full'} objectFit={'contain'} src={mainlogo} />
      </motion.div>
    </Box>
  );
};

export default Home;
