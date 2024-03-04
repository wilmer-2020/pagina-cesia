import { Card, CardBody, CardFooter, Image, Stack,Heading, Button,Text } from '@chakra-ui/react';

const CardPc = ({img1,img2,img3,title,text}) => {
  return (
    <article className='card-pc'>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='filled'
>
  <Image
  className='img-card'
    objectFit='contain'
    maxW={{ base: '100%', sm: '300px' }}
    src={img1}
    alt='Caffe Latte'
  />
  <Image
  className='img-card'
  objectFit='contain'
    maxW={{ base: '100%', sm: '170px' }}
    src={img2}
    alt='Caffe Latte'
  />
  <Image
  className='img-card'
    objectFit='contain'
    maxW={{ base: '100%', sm: '170px' }}
    src={img3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        {text}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Ver Mas
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </article>
  )
}

export default CardPc