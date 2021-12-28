import { useState } from "react"

export const useForm = (initialState = {}):any => {
    //Uso un state que me permite actualizar el input y devolver los valores en tiempo real
    const [values, setValues] = useState(initialState)


    const reset = (newFormState = initialState) => {
        setValues(newFormState)
    }

    //Coge del evento el valor (la letra) y le asigna,
    // dependiendo del name del input, su valor correspondiente
    
    const handleInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) =>  {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    //Devuelvo los valores actuales para el onsubmit
    // el handleInputChange para pasarle el evento 
    //y el reset para despues del submit volver al estado inicial
    return [values, handleInputChange, reset]
}
