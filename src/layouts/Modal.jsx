import { useRef,useState} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input
} from '@chakra-ui/react'

const ModalWhatsapp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [text, setText] = useState('')
  const getData = (e) =>{
    setText(e.target.value)
  }
  const URL=`https://wa.me/32154423?text=${text} `
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Button
       className="button-modal"
        colorScheme="green" 
        onClick={onOpen}>Whatsapp</Button>
    

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Estamos Para Ti</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Escribe tu mensaje</FormLabel>
              <Input ref={initialRef} placeholder='Mensaje' onChange={getData} value={text}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <a href={URL}
              target="_blank"
              rel="noreferrer"
              className="button-modal"
              style={{backgroundColor:'green', padding:'5px 15px', color:'white', borderRadius:'5px'}}
              onClick={onClose}>
              Enviar
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalWhatsapp