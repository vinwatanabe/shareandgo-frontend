import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReviewCard from '../ReviewCard';
import DriverImage from '../../images/profile-picture-mockup.jpg';


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{
    const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit.'
    const name ='Cara Moon';
    const image = DriverImage;
    const rating  = '3';
    const tree = renderer.create(<ReviewCard rating={rating} image = {DriverImage} name = {name} comment = {comment}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

