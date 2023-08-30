import { renderHook, waitFor } from '@testing-library/react';
import { useGetCats } from '../../hooks/useGetCats';

describe('useGetCats', () => {
  test('should return a list of cats', async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, name: 'Garfield' },
          { id: 2, name: 'Felix' },
          { id: 3, name: 'Tom' },
        ]),
      });
    });
    const { result } = renderHook(() => useGetCats());
    
    await waitFor(() => {
      expect(result.current.cats).toEqual([
        { id: 1, name: 'Garfield' },
        { id: 2, name: 'Felix' },
        { id: 3, name: 'Tom' },
      ]);
    });
  });

  test('should return an error message', async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    const { result } = renderHook(() => useGetCats());
    
    await waitFor(() => {
      expect(result.current.error).toEqual('Something get wrong please try again later.');
    });
  });

  test('should return an error message', async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.reject();
    });
    const { result } = renderHook(() => useGetCats());
    
    await waitFor(() => {
      expect(result.current.error).toEqual('Something get wrong please try again later.');
    });
  });
});