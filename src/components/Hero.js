'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'





export default function HeroWithPic() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Welcome to{' '}
          <Text as={'span'} color={palette.dtxGreen}>
            DTX
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          hi im king julian and i am funky funky
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'white'}
            bg={palette.dtxGreen}
            _hover={{ bg: palette.dtxGold}}>
            I Like to
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'white'}
            bg={palette.dtxGold}
            _hover={{ bg: palette.dtxGreen}}>
            Move It
          </Button>
        </Stack>
        <Flex w={'full'}>
          {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
          <img src = {dtxlogo} height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  )
}