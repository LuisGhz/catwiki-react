import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Searcher } from "../../components/Searcher";
import { BreedSearcher } from "../../models/BreedSearcher.model";

describe("Searcher", () => {
  it("renders correctly", () => {
    const breeds: BreedSearcher[] = [
      {
        id: "1",
        name: "test",
      },
    ];
    const onSelect = vi.fn();
    render(<Searcher breeds={breeds} onSelectBreed={onSelect} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Do search with results", async () => {
    const breeds: BreedSearcher[] = [
      {
        id: "1",
        name: "test",
      },
      {
        id: "2",
        name: "test",
      },
      {
        id: "3",
        name: "three",
      },
    ];
    const onSelect = vi.fn();
    render(<Searcher breeds={breeds} onSelectBreed={onSelect} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "test");
    const results = screen.queryAllByTestId('result-item');
    expect(results).toHaveLength(2);
    await userEvent.click(results[0]);
    expect(onSelect).toHaveBeenCalled();
  });

  it("Do search without results", async () => {
    const breeds: BreedSearcher[] = [
      {
        id: "1",
        name: "test",
      },
      {
        id: "2",
        name: "test",
      },
      {
        id: "3",
        name: "three",
      },
    ];
    const onSelect = vi.fn();
    render(<Searcher breeds={breeds} onSelectBreed={onSelect} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "four");
    expect(screen.queryAllByTestId('result-item')).toHaveLength(0);
  });

  it("Do search with empty value", async () => {
    const breeds: BreedSearcher[] = [
      {
        id: "1",
        name: "test",
      },
      {
        id: "2",
        name: "test",
      },
      {
        id: "3",
        name: "three",
      },
    ];
    const onSelect = vi.fn();
    render(<Searcher breeds={breeds} onSelectBreed={onSelect} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, " ");
    expect(screen.queryAllByTestId('result-item')).toHaveLength(0);
  });
});
