import React from 'react';
import { render, screen, waitFor , act } from '@testing-library/react';
import axios from 'axios';
import {  MemoryRouter, Route, Routes } from 'react-router-dom';
import Cakedetails from './Cakedetails';
import Login from './Login';

jest.mock('axios');

describe('Cakedetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders cake details', async () => {
    const cakeData = {
      cakeid: 1,
      name: 'Test Cake',
      price: 100,
      image: 'test_image.jpg',
      weight: '1Kg',
      ratings: 4,
      reviews: 10,
      description: 'This is a test cake',
    };

    axios.mockResolvedValueOnce({ data: { data: cakeData } });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
          <Route path="/details/:cakeid" element={<Cakedetails /> } />
          <Route path="/login" element={<Login /> } />
          </Routes>
        </MemoryRouter>
      );
    });


    
      expect(screen.getByText(cakeData.name)).toBeInTheDocument();
      expect(screen.getByText(`${cakeData.price} Rs`)).toBeInTheDocument();
      expect(screen.getByText(`Ratings: ${cakeData.ratings}`)).toBeInTheDocument();
      expect(screen.getByText(`Reviews: ${cakeData.reviews}`)).toBeInTheDocument();
      expect(screen.getByText(cakeData.description)).toBeInTheDocument();
      expect(screen.getByAltText('Cake Image')).toHaveAttribute('src', cakeData.image);
})

})