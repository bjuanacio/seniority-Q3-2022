/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'

const Input: React.FC<PichinchaInputHTMLAttributes> = (props) => {
  const input = useRef<any>(null)

  useEffect(() => {
    const handleChange = (event: any) => {
      if (props.onChange) props.onChange(event.target.value)
    }
    input.current.addEventListener('ichange', handleChange)
    return () => {
      ;(input as any).remove.eventListener('ichange', handleChange)
    }
  }, [])

  return (
    <div>
      <pichincha-input data-testid="input-testid" ref={input} {...props} />
    </div>
  )
}

export default Input
