import { Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Flex align="center" justify="center" bgColor={'blackAlpha.900'}>
      <HStack p={4} shadow={'base'} width="100%">
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
      <ColorModeSwitcher color={'yellow'} p={5} />
    </Flex>
  );
};

export default Header;

//removed  bgColor={"blackAlpha.900"} from hstack and color stwicher

// flex was added
