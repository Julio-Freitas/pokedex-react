import { render, screen } from "@testing-library/react";
import { Button } from "..";

describe("<Button />", () => {
    it("Teste exemple", () => {
        render(<Button />);
        expect(screen.getByText(/BTN/)).toBeInTheDocument();
    });
});
