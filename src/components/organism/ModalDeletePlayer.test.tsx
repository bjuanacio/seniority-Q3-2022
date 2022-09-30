import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ModalDeletePlayer } from './ModalDeletePlayer';

describe("Componente ModalDeletePlayer", () => {
    test("si una prop de nombre es pasada, renderizar el mensaje con la prop ", () => {
        const props = {
            name: '',
            message: '',
            toggleClose: '',
            deletePlayerById: '',
            idPlayerDelete : ''       
        }
        render(<ModalDeletePlayer  {...props} />);
        const titulo = screen.getByTestId("titleDelete")
        expect(titulo).toBeInTheDocument();
    })

    test('muestra modal de eliminar y cierra el modal', () => {
        // Arrange
        const props = {
            name: '',
            message: '',
            toggleClose: jest.fn(),
            deletePlayerById: '',
            idPlayerDelete : ''       
        }
      
        // Act
        const {getByText} = render(
          <ModalDeletePlayer {...props} />
                    )
        // Assert
        expect(getByText('Lucario')).toBeTruthy()
      
        // Act
        fireEvent.click(getByText("×"))
      
        // Assert
      })

      test('cierra el modal al presionar el boton cancelar', () => {
        // Arrange
        const toggleClose = jest.fn()
        const props = {
            name: '',
            message: '',
            toggleClose: jest.fn(),
            deletePlayerById: '',
            idPlayerDelete : ''       
        }
      
        // Act
        const {getByText} = render(
          <ModalDeletePlayer {...props} />
                    )
        // Assert
        expect(getByText('Cancelar')).toBeTruthy()
      
        // Act
        fireEvent.click(getByText("×"))
      
        expect(toggleClose).toHaveBeenCalledTimes(1)
      })
})