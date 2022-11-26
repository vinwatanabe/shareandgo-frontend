import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import RatingSrars from '../RatingStars'


afterEach(() =>{
    cleanup();
});

test('matches snapshot', () =>{
    const rating  = '3';
    const tree = renderer.create(<RatingSrars rating={rating}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

