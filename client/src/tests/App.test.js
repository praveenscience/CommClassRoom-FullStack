import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app page", () => {
  render(<App />);
  const linkElement = screen.getByText(/community classroom/i);
  expect(linkElement).toBeInTheDocument();
});
