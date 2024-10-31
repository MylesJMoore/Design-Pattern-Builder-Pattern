import { render, screen, fireEvent } from "@testing-library/react";
import ProfileBuilder from "./ProfileBuilder";

test("ProfileBuilder renders correctly", () => {
    render(<ProfileBuilder />);
    expect(screen.getByText("Build Profile")).toBeInTheDocument();
});

test("Form submission works", async () => {
    render(<ProfileBuilder />);
    fireEvent.change(screen.getByLabelText(/Theme/i), { target: { value: "Dark" } });
    fireEvent.change(screen.getByLabelText(/Font/i), { target: { value: "Arial" } });
    fireEvent.change(screen.getByLabelText(/Features/i), { target: { value: "Feature1,Feature2" } });
    fireEvent.click(screen.getByText("Build Profile"));
    // Additional assertions could be added here based on the fetch mock or handling
});