import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba en <GifGrid />', () => { 

    const category = 'Demon slayer'
    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category}/>)
        expect( screen.getByText('Cargando...'))
        expect( screen.getByText(category))
     })

     test('debe de mostrar items cuando se cargan las imagenes useFecthGifs', () => {
        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost3000.jpg'
            },
            {
                id:'123',
                title:'GOKU',
                url:'https://localhost3000/Goku.jpg'
            },
            ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

     })
 })