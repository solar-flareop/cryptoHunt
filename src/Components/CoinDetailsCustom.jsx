import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const CustomBar = ({ high, low }) => {
  return (
    <VStack w={'full'}>
      <Progress value={60} w={'full'} colorScheme={'teal'} />
      <HStack justifyContent={'space-between'} w={'full'}>
        <Badge children={low} colorScheme={'red'}></Badge>
        <Text fontSize={'sm'}>24Hr Range</Text>
        <Badge children={high} colorScheme={'green'}></Badge>
      </HStack>
    </VStack>
  );
};

export const Item = ({ title, value }) => {
  return (
    <HStack justifyContent={'space-between'} my={4} w={'full'}>
      <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
        {title}
      </Text>
      <Text>{value}</Text>
    </HStack>
  );
};
