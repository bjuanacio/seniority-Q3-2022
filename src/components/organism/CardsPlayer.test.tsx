import React from 'react'
import { render } from '@testing-library/react'
import { CardsPlayer } from './CardsPlayer'

describe('Probando componente CardsPlayer', () => {

    test("renderizando jugadores", () => {
        const players = {
            players: [
                {
                    "id": 80,
                    "firstName": "",
                    "lastName": "",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg",
                    "attack": 27,
                    "defense": 29,
                    "skills": 27,
                    "idAuthor": 43,
                    "idPosition": 0
                  },
                  {
                    "id": 82,
                    "firstName": "",
                    "lastName": "",
                    "image": "https://p7s5h3q6.stackpathcdn.com/wp-content/uploads/2022/09/16625754901379-640x427.jpg",
                    "attack": 17,
                    "defense": 21,
                    "skills": 5,
                    "idAuthor": 43,
                    "idPosition": 0
                  }
            ],
            setPlayers: '',
            messageNoPlayers: '',
            toggleDelete: '',
            togglEdit: ''
        }

        render(<CardsPlayer {...players} />)
    })
})