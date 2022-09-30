import { useEffect, useRef } from 'react'

const Button: React.FC<PichinchaButtonHTMLAttributes> = (props) => {
  const button = useRef<any>(null)

  useEffect(() => {
    const handleClick = () => {
      if (props.onClick) props.onClick()
    }

    button.current.addEventListener('clickbutton', handleClick)
    return () => {
      ;(button as any).remove.eventListener('clickbutton', handleClick)
    }
  }, [])

  return (
    <pichincha-button ref={button} {...props}>
      {props.children}
    </pichincha-button>
  )
}

export default Button
