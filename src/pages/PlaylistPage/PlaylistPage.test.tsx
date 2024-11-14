import { render, screen, fireEvent } from '@testing-library/react';
import { PlaylistPage } from './PlaylistPage';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { jest } from '@jest/globals';


describe('UsersPage', () => {
  it('должен вызывать setSearchParam при вводе жанра и названия', async () => {
    const cbk = jest.fn();

    jest.spyOn(Router, 'useSearchParams')
    .mockReturnValue([new URLSearchParams(), cbk]);


    render(<PlaylistPage />);

    const nameInput = screen.getByTestId('NameInput');
    const genreInput = screen.getByTestId('GenreInput');

    await fireEvent.input(nameInput, { target: { value: 'Dance' } });
    expect(cbk).toHaveBeenCalledWith({ searchName: 'Dance' });


    await fireEvent.input(genreInput, {target: { value:'Rock' } });
    expect(cbk).toHaveBeenCalledWith({searchGenre: 'Rock'})
  })
});
