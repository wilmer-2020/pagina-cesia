import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'

const SelectForm = ({label,option1,option2}) => {
  return (
    <>
      <div className="form-group">
      <FormControl>
  <FormLabel>{label}</FormLabel>
  <Select placeholder='Seleccione la sucursal'>
    <option>{option1}</option>
    <option>{option2}</option>
  </Select>
</FormControl>
      </div>
    </>
  )
}

export default SelectForm