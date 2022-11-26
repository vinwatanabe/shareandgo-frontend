import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ButtonPrimary from '../ButtonPrimary';
import DriverImage from '../../images/profile-picture-mockup.jpg';
import { MemoryRouter } from 'react-router-dom';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 
    const text = 'Login'
    const className = 'col-6 col-md-3 mx-auto d-block'
    const link = '/main-passenger'
    const clickAction = ''
    const tree = renderer.create(
        <MemoryRouter>
            <ButtonPrimary text={text} className={className} link={link} clickAction={clickAction}/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});