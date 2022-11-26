import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import MessageCard from '../MessageCard';
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
    }
    const tree = renderer.create(
        <MemoryRouter>
            <MessageCard {...testInfo}/>
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});