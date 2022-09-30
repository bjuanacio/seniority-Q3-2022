import { ChangeEvent, useState } from 'react'

export const useForm = (initialState: { [key: string]: any } = {}) => {
  const [values, setValues] = useState(initialState)
  const [validation, setValidation] = useState(
    Object.keys(initialState).reduce((prev, curr) => {
      return {
        ...prev,
        [curr]:
          (initialState as any)[curr] !== undefined &&
          ((initialState as any)[curr] as string).toString().length > 0
            ? true
            : false
      }
    }, {})
  )

  const validate = (name: string, value: string | number) => {
    setValidation({
      ...validation,
      [name]: value.toString().length == 0 ? false : true
    })
  }

  const handleInputChange = ({ value, name }: { value: string | number; name: string }) => {
    setValues({
      ...values,
      [name]: value
    })
    validate(name, value)
  }

  const validateAll = (receivedValues: any) => {
    setValidation(
      Object.keys(receivedValues).reduce((prev, curr) => {
        return {
          ...prev,
          [curr]:
            (receivedValues as any)[curr] !== undefined &&
            ((receivedValues as any)[curr] as string).toString().length > 0
              ? true
              : false
        }
      }, {})
    )
  }

  const reset = (newValues?: any) => {
    setValues(newValues ? newValues : initialState)
    validateAll(newValues ? newValues : initialState)
  }

  return { values, handleInputChange, reset, validation }
}
