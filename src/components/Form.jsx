import { Textarea } from '@chakra-ui/react'
import InputForm from "../layouts/InputForm";
import SelectForm from "../layouts/SelectForm";
import { useToast } from '@chakra-ui/react'

const Form = () => {
  const toast = useToast();
  return (
    <form className='form'>
      <InputForm label={'Nombre'} placeholder={'ingrese su nombre'}/>
      <InputForm label={'telefono'} placeholder={'ingrese su telefono'}/>
      <SelectForm label={"Sucursal"} option1={'NECTEC-Comayagua'} option2={'NECTEC-La Paz'}/>
      <Textarea
        placeholder='Escriba su mensaje'
        size='sm'
        resize={'none'}
        required={true}
      />
      <input type="submit" value="ENVIAR" className='button-enviar'
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('.form').reset()
          const examplePromise = new Promise((resolve) => {
          setTimeout(() => resolve(200), 3000)
        })
        toast.promise(examplePromise,{
          success: { title: 'Mensaje Enviado', description: 'Nos pondremos en contacto muy pronto' },
          error: { title: 'Promise rejected', description: 'Something wrong' },
          loading: { title: 'Enviando Mensaje'},
        })
        }}
      />
    </form>
  );
};

export default Form;
