import renderer from 'react-test-renderer'
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';
import {render, screen, cleanup} from '@testing-library/react'
import * as AuthContext from '../../context/AuthContext'


jest.mock("axios", ()=>({
    // default:{
    //     get: () =>({

    //     })
    // }
}))

afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 

    const tree = renderer.create(
        <AuthContext.Context.Provider value = {{authenticated : false, loading : true, userData : {}}}>
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        </AuthContext.Context.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});