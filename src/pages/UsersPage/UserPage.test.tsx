import { render, screen, fireEvent } from '@testing-library/react';
import { UsersPage } from './UsersPage';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { jest } from '@jest/globals';


describe('UsersPage', () => {
  it('должен вызывать setSearchParam при вводе имени пользователя', async () => {
    const cbk = jest.fn();

    // Мокаем useSearchParams
    jest.spyOn(Router, 'useSearchParams')
    .mockReturnValue([new URLSearchParams(), cbk]);


    render(<UsersPage />);


    const nameInput = screen.getByTestId('NameInput');

    await fireEvent.input(nameInput, { target: { value: 'alex' } });
    expect(cbk).toHaveBeenCalledWith({ searchName: 'alex' });
  })
});

