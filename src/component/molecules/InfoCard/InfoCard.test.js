import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  it("renders the name and the AI-focused description", () => {
    render(<InfoCard />);
    expect(
      screen.getByRole("heading", { name: "Aashutosh Prakash" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI Engineer with 10\+ years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders the projects section with external project links", () => {
    render(<InfoCard />);
    const projects = screen.getByRole("region", { name: /projects/i });
    expect(projects).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Paytm" })
    ).toHaveAttribute("href", "https://paytm.com/recharge");

    const evenkar = screen.getByRole("link", { name: "Evenkar" });
    expect(evenkar).toHaveAttribute("href", "https://evenkar.vercel.app");
    expect(evenkar).toHaveAttribute("target", "_blank");
    expect(evenkar).toHaveAttribute("rel", "noopener noreferrer");

    expect(
      screen.getByRole("link", { name: "claude-atone" })
    ).toHaveAttribute("href", "https://github.com/aashutosh-prakash/claude-atone");
    expect(
      screen.getByRole("link", { name: "react-live-region" })
    ).toHaveAttribute("href", "https://www.npmjs.com/package/react-live-region");
    expect(
      screen.getByRole("link", { name: "claude-nudge" })
    ).toHaveAttribute("href", "https://github.com/aashutosh-prakash/claude-nudge");
  });

  it("links the DEVELOPER easter egg to the game route as an internal link", () => {
    render(<InfoCard />);
    const developer = screen.getByRole("link", { name: "DEVELOPER" });
    expect(developer).toHaveAttribute("href", "/game");
    expect(developer).not.toHaveAttribute("target");
    expect(developer).not.toHaveAttribute("rel");
  });

  it("links to LinkedIn via an icon, opening safely in a new tab", () => {
    render(<InfoCard />);
    const linkedin = screen.getByRole("link", { name: /connect on linkedin/i });
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/aashutoshprakash/"
    );
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("links to X via an icon, opening safely in a new tab", () => {
    render(<InfoCard />);
    const x = screen.getByRole("link", { name: /find me on x/i });
    expect(x).toHaveAttribute("href", "https://x.com/Aashutosh_94");
    expect(x).toHaveAttribute("target", "_blank");
    expect(x).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("links to GitHub via an icon, opening safely in a new tab", () => {
    render(<InfoCard />);
    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/aashutosh-prakash"
    );
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });
});
