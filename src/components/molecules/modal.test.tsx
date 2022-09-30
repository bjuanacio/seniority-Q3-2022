import { fireEvent, render, screen } from '@testing-library/react'
import exp from 'constants'
import React from 'react'
import { Modal } from './modal'

describe('Modal', () => {
  test('should work correctly', () => {
    const onSubmitMock = jest.fn()
    const closeModalMock = jest.fn()
    const setCurrentPlayerMock = jest.fn()
    render(
      <Modal
        isNewPlayer={true}
        isVisible={true}
        closeModal={closeModalMock}
        onSubmit={onSubmitMock}
        submitChanges={() => {}}
        setPlayer={setCurrentPlayerMock}
        player={{}}
      />
    )
    fireEvent.change(screen.getByLabelText('firstName'), { target: { value: 'Example' } })
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTestId('close-icon'))
    expect(screen.queryByText(/Editar jugador/i)).toBeNull()
  })
})
