import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import SearchBar from '../SearchBar'
import { MemoryRouter } from 'react-router-dom';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 
    const tree = renderer.create(
        <MemoryRouter>
            <SearchBar />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});