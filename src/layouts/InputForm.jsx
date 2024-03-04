import {
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const InputForm = ({ label,placeholder }) => {
  return (
    <>
     <div className="form-group">
     <FormControl isRequired>
        <FormLabel>{label}</FormLabel>
        <Input placeholder={placeholder}/>
      </FormControl>
     </div>
    </>
  );
};

export default InputForm;
