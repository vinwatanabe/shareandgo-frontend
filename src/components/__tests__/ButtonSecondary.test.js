import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ButtonSecondary from '../ButtonSecondary';
import DriverImage from '../../images/profile-picture-mockup.jpg';
import { MemoryRouter } from 'react-router-dom';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 
    const text = 'Login'
    const className = 'col-12';
    const link = '/login'
    const clickAction = '';

    const tree = renderer.create(
        <MemoryRouter>
            <ButtonSecondary text={text} className={className} link={link} clickAction={''}/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});