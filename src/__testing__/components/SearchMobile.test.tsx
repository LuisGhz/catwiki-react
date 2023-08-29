import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchMobile } from '../../components/SearchMobile';
import { BreedSearcher } from '../../models/BreedSearcher.model';

describe('SearchMobile', () => {
  it('Should make search with results', async () => {
    const breeds: BreedSearcher[] = [
      {
        id: 'abys',
        name: 'Abyssinian',
      },
      {
        id: 'aege',
        name: 'Aegean',
      },
      {
        id: 'abob',
        name: 'American Bobtail',
      },
    ];
    const onSelectBreed = vi.fn();
    const setIsSearchMobileOpen = vi.fn();
    render(
      <SearchMobile
        setIsSearchMobileOpen={setIsSearchMobileOpen}
        breeds={breeds}
        onSelectBreed={onSelectBreed}
      />
    );
    const input = screen.getByTestId("search-input");
    await userEvent.type(input, 'ab')
    const results = screen.getAllByTestId("result-item");
    expect(results).toHaveLength(1);

    await userEvent.click(results[0]);
    expect(onSelectBreed).toHaveBeenCalledWith(breeds[0]);
    expect(setIsSearchMobileOpen).toHaveBeenCalledWith(false);
  });

  it('Should make search without results', async () => {
    const breeds: BreedSearcher[] = [
      {
        id: 'abys',
        name: 'Abyssinian',
      },
      {
        id: 'aege',
        name: 'Aegean',
      },
      {
        id: 'abob',
        name: 'American Bobtail',
      },
    ];
    const onSelectBreed = vi.fn();
    const setIsSearchMobileOpen = vi.fn();
    render(
      <SearchMobile
        setIsSearchMobileOpen={setIsSearchMobileOpen}
        breeds={breeds}
        onSelectBreed={onSelectBreed}
      />
    );
    const input = screen.getByTestId("search-input");
    await userEvent.type(input, 'za')
    const results = screen.queryAllByTestId("result-item");
    expect(results).toHaveLength(0);
  });
});