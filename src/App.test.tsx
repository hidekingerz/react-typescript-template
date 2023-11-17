import { render, screen } from "./lib/vitest/test-util.ts";
import { App } from "./App.tsx";

describe("App test", () => {
  const setup = () => {
    render(<App />);
  };

  it("ロゴが表示される", () => {
    setup();
    expect(screen.getByRole("img", { name: "logo" })).toBeDefined();
  });
  it("指定のタイトルが表示される", () => {
    setup();
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });
});
