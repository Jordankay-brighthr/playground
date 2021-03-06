import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Carousel from './components/Carousel';

it('should not error if no props passed in', () => {
  render(<Carousel/>);
});

it('should show a slide when content is provided', () => {
  render(<Carousel slides={['Slide 2']}/>);

  expect(screen.getByText('Slide 2')).toBeInTheDocument();
});

it('should show the next slide when "next slide" is clicked and disable the "next slide" button when no next slide is available', () => {
  render(<Carousel slides={['Slide 1','Slide 2','Slide 3']}/>);

  expect(screen.getByText('Slide 1')).toBeInTheDocument();

  userEvent.click(screen.getByText('next slide'));
  userEvent.click(screen.getByText('next slide'));

  expect(screen.getByText('Slide 3')).toBeInTheDocument();

  expect(screen.getByText('next slide')).toBeDisabled();
});

it('should show the previous slide when "previous slide" is clicked and disable the "previous slide" button when no previous slide is available', () => {
  render(<Carousel slides={['Slide 1','Slide 2']}/>);

  expect(screen.getByText('Slide 1')).toBeInTheDocument();

  userEvent.click(screen.getByText('next slide'));

  expect(screen.getByText('Slide 2')).toBeInTheDocument();

  userEvent.click(screen.getByText('previous slide'));

  expect(screen.getByText('Slide 1')).toBeInTheDocument();

  expect(screen.getByText('previous slide')).toBeDisabled();
});

it('should show the current slide, out of the maximum number of slides', () => {
  render(<Carousel slides={['Slide 1','Slide 2']}/>);

  expect(screen.getByText('1/2')).toBeInTheDocument();

  userEvent.click(screen.getByText('next slide'));

  expect(screen.getByText('2/2')).toBeInTheDocument();
});

it('should provide option to auto progress the slides', () => {
  jest.useFakeTimers();
  render(<Carousel slides={['Slide 1','Slide 2','Slide 3']} autoProgress/>);

  expect(screen.getByText('Slide 1')).toBeInTheDocument();

  act(() => {
    jest.runOnlyPendingTimers();
  })

  expect(screen.getByText('Slide 2')).toBeInTheDocument();
  
  act(() => {
    jest.runOnlyPendingTimers();
  })

  expect(screen.getByText('Slide 3')).toBeInTheDocument();

  act(() => {
    jest.runOnlyPendingTimers();
  })

  expect(screen.getByText('Slide 1')).toBeInTheDocument();
  
  jest.useRealTimers();
});