import {render, screen, cleanup, getByAltText} from '@testing-library/react'
import renderer from 'react-test-renderer'
import Login from '../Login'
import { MemoryRouter } from 'react-router-dom';
import * as AuthContext from '../../context/AuthContext'
import ShareGoIcon from '../../images/ShareGo-icon.svg';

afterEach(() =>{
    cleanup();
});

// test('login button should be rendered', () =>{
//     render(<MemoryRouter>
//         <Login/>
//     </MemoryRouter>)
//     const loginButtonEl = screen.getByText(/login/i);
//     expect(loginButtonEl).toBeInTheDocument();
// })

test('login button should be rendered', () =>{
    render(       
     <AuthContext.Context.Provider value={function setAuthenticated(param){}}>
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
    </AuthContext.Context.Provider>)
    const iconPhotoEl = screen.getByText(/login/i);
    expect(iconPhotoEl).toBeInTheDocument();
});

test('icon should be correctly rendered', async () =>{
    
    const {getByAltText} = await render(       
        <AuthContext.Context.Provider value={function setAuthenticated(param){}}>
           <MemoryRouter>
               <Login/>
           </MemoryRouter>
       </AuthContext.Context.Provider>);

    const image = getByAltText('Share & Go icon');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(ShareGoIcon);
})

test('matches snapshot', () =>{ 
    const tree = renderer.create(
        <AuthContext.Context.Provider value={function setAuthenticated(param){}}>
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
        </AuthContext.Context.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('form inputs', () =>{
    test('email input should be rendered', ()=>{
        render(       
            <AuthContext.Context.Provider value={function setAuthenticated(param){}}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </AuthContext.Context.Provider>)
        const usernameInputEl = screen.getByPlaceholderText(/email/i);
        expect(usernameInputEl).toBeInTheDocument();
    })

    test('password input should be rendered', ()=>{
        render(
            <AuthContext.Context.Provider value={function setAuthenticated(param){}}>
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        </AuthContext.Context.Provider>
        )
        const passwordInputEl = screen.getByPlaceholderText(/password/i);
        expect(passwordInputEl).toBeInTheDocument();

    })
})