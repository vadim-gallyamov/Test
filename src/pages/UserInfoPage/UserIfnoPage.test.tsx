import { render, screen} from '@testing-library/react';
import { BrowserRouter, useParams,} from 'react-router-dom';
import '@testing-library/jest-dom'
import { ReactElement,} from 'react';
import { UserInfoPage } from './UserInfoPage';
import { USERS } from '../../data/users';




export const renderWithRouter = (ui: ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({ userId: '100' })),
}));

describe('Тест компонента UserInfoPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  it('Должен отобразить соответсвующий текст при несуществующем userId', () => {
    renderWithRouter(<UserInfoPage />);

    expect(useParams).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Пользователь с таким ID не найден'));
  });
  it('Должен отобразить данные о пользователе, если он доступен', () => {
    const userId = '1'; // ID пользователя для проверки
    const user = USERS.find(u => u.id === Number(userId));

    if (!user) {
      throw new Error(`Пользователь с ID ${userId} не найден`);
    }

    (useParams as jest.Mock).mockReturnValue({ userId });
    renderWithRouter(<UserInfoPage />);

    expect(useParams).toHaveBeenCalledTimes(1);
    expect(screen.queryByText(`Email: ${user.email}`));
    expect(screen.queryByText(`Имя: ${user.fullName}`));
    expect(screen.queryByText(`Сcылка: ${user.playlist}`))
  });
});
