import { useState } from 'react'

type UseValidationFunction = (input: string) => boolean

export const useValidation = (validationFunction: UseValidationFunction) => {
  const [isValid, setIsValid] = useState(true)

  const validate = (input: string) => {
    if(!validationFunction(input)) setIsValid(false) 
  }

  return {
    isValid,
    validate
  }
}
