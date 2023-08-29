import { renderHook, waitFor } from "@testing-library/react";
import { useGetBreeds } from "../../hooks/useGetBreeds";

describe("useGetBreeds", () => {
  it("Should return an object with breeds", async () => {
    global.fetch = vi.fn().mockReturnValueOnce({
      json: () => Promise.resolve([{ id: "1", name: "Abyssinian" }]),
      ok: true,
    });

    const { result } = renderHook(() => useGetBreeds());

    await waitFor(() => expect(result.current.breeds).toBeDefined());
    await waitFor(() => expect(global.fetch).toBeCalled());
  });

  it("Should return an error message", async () => {
    global.fetch = vi.fn().mockReturnValueOnce({
      json: () => Promise.reject(),
      ok: false,
    });

    const { result } = renderHook(() => useGetBreeds());
    await waitFor(() =>
      expect(result.current.error).toBe(
        "Something get wrong please try again later"
      )
    );
    await waitFor(() => expect(global.fetch).toBeCalled());
  });
});
