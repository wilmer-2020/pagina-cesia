import { Card, Image, CardBody, CardFooter, Stack,Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const CardPhone = ({name,description,img,price}) => {
  return (
    <Card maxW='sm' className='card'>
  <CardBody className='card-body'>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='md'
      className='card-image'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className='title-card'>{name}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        L.{price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter className='card-footer'>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Ver Producto
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al Carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default CardPhone