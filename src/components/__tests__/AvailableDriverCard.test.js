import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import AvailableDriverCard from '../AvailableDriverCard';
import DriverImage from '../../images/profile-picture-mockup.jpg';
import { MemoryRouter } from 'react-router-dom';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{ 
    const testInfo ={
    driverPhoto : DriverImage,
	driverName : 'Mathew Pitts',
	destination : 'Abbotsford, BC',
	date : '10/15/2022',
	time : '9:45am',
	link : '/message-content',
	driverRating : '4',
	availableSeats : '3',
	price : '128.95',
	link : '/ride-info',
    }

    const tree = renderer.create(
        <MemoryRouter>
            <AvailableDriverCard {...testInfo}/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});