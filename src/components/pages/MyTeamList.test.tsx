import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/dom';
import {MyTeamList} from './MyTeamList';
import { getPlayerById, getPlayers } from '../../api/players';

describe("Componente MyTeamList", () => {
    test("App", () => {
        render(<MyTeamList />);
        const linkElement = screen.getByText(/MI EQUIPO/i);
        expect(linkElement).toBeInTheDocument();
    })

    test("Api get testing", async() => {
        const resultado = await getPlayers();
        expect(resultado[0].name).toEqual("neymar")
    })
    
    test("Api get testing by id", async() => {
        const resultado = await getPlayerById(117);
        expect(resultado.name).toEqual("neymar")
    })
})




