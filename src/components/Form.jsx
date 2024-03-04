import { Textarea } from '@chakra-ui/react'
import InputForm from "../layouts/InputForm";
import SelectForm from "../layouts/SelectForm";

const Form = () => {
  return (
    <form>
      <InputForm label={'Nombre'} placeholder={'ingrese su nombre'}/>
      <InputForm label={'telefono'} placeholder={'ingrese su telefono'}/>
      <SelectForm label={"Sucursal"} option1={'NECTEC-Comayagua'} option2={'NECTEC-La Paz'}/>
      <Textarea
        placeholder='Escriba su mensaje'
        size='sm'
        resize={'none'}
        required={true}
      />
      <input type="submit" value="ENVIAR" className='button-enviar'/>
    </form>
  );
};

export default Form;
