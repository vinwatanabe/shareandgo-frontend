import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import RideCard from '../RideCard';
import DriverImage from '../../images/profile-picture-mockup.jpg';
import { MemoryRouter } from 'react-router-dom';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 
    const testInfo ={
        driverPhoto : DriverImage,
        driverName : 'Mathew Pitts',
        driverRating : '3',
        pickupLocation : '700 Royal Street',
        destination: '31254 Charlotte Avenue',
        date: '10/15/2022',
        time: '9:45am',
        price: '$58.42',
        link: '/ride-info',
    }

    const tree = renderer.create(
        <MemoryRouter>
            <RideCard {...testInfo}/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});