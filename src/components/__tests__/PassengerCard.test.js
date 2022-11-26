import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import PassengerCard from '../PassengerCard';
import DriverImage from '../../images/profile-picture-mockup.jpg';

afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{
    const name = 'Betty Wallace';
    const tree = renderer.create(<PassengerCard name={name} image={DriverImage}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

