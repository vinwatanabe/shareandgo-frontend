import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import Gateway from '../Gateway';
import { MemoryRouter } from 'react-router-dom';

afterEach(() =>{
    cleanup();
});

test('login button should be rendered', () =>{
    render(<MemoryRouter>
        <Gateway />
    </MemoryRouter>)
    const loginButtonEl = screen.getByText(/login/i);
    expect(loginButtonEl).toBeInTheDocument();
})

test('register button should be rendered', () =>{
    render(<MemoryRouter> 
        <Gateway/>
        </MemoryRouter>);
    const registerButtonEl = screen.getByText(/register/i)
    expect(registerButtonEl).toBeInTheDocument();
})

test('logo should be rendered', async() =>{
    const {getByAltText} = await render(  
        <MemoryRouter> 
        <Gateway/>
        </MemoryRouter>     
        );
    const image = getByAltText('Share & Go Logo');
    expect(image).toBeInTheDocument();
});

test('matches snapshot', () =>{ 
    const tree = renderer.create(
        <MemoryRouter>
            <Gateway />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});