import { render, screen } from '@testing-library/react';
import { PlaylistInfoPage } from '../PlaylistInfoPage/PlaylistInfoPage';
import { BrowserRouter, useParams } from 'react-router-dom';
import '@testing-library/jest-dom'
import { ReactElement } from 'react';
import { PLAYLISTS } from '../../data';

export const renderWithRouter = (ui: ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({ playlistId: '100' })),
}));

describe('Тест компонента PlaylistPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  it('Должен отобразить соответсвующий текст при несуществующем playlistId', () => {
    (useParams as jest.Mock).mockReturnValue({ playlistId: '100' })
    renderWithRouter(<PlaylistInfoPage />)

    expect(screen.getByText('плейлист с таким playlistId нет')).toBeDefined()
  })
  it('Должен отобразить данные о playlist при передаче существующего playlistId', () => {
    const playlistId = '1';
    const playlist = PLAYLISTS.find(p => p.id === Number(playlistId));

    if (!playlist) {
      throw new Error(`Плейлист с ID ${playlistId} не найден`);
    }

    (useParams as jest.Mock).mockReturnValue({ playlistId });
    const {container} =renderWithRouter(<PlaylistInfoPage />);

    expect(screen.getByText(`Жанр: ${playlist.genre}`)).toBeInTheDocument();
    expect(screen.getByText(`Название: ${playlist.name}`)).toBeInTheDocument();

    expect(container.getElementsByClassName('songs')[0].childNodes.length).toBe(
      playlist.songs.length
    );
  });
  });


