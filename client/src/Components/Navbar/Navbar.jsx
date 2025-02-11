import { useState } from 'react'
import { Flex, Button, Group, UnstyledButton, Text} from '@mantine/core';

import './Navbar.css'
function Navbar(){
    return (
        <Group bg={"grey"} h="6rem" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text fw={900} size='1em' color='white'>Tommy Contractor Logo</Text>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Button size="lg"className='NavButton'>Home</Button>
              <Button size="lg" className='NavButton'>Blog</Button>
              <Button size="lg" className='NavButton'>Contact</Button>
              <Button size="lg" className='NavButton'>Gallary</Button>
            </Group>
          </Group>
        </Group>
      );
    }
export default Navbar;