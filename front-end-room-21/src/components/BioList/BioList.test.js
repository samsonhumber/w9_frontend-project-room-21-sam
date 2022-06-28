import { render, screen } from "@testing-library/react";
import { BioList } from "./bioList.js";

test("Renders the biographies through BiosList function properly.", () => {
  const bioData = [
    {
      id: "1",
      name: "Kay Oss",
      region: "Yorkshire",
      jobtitle: "UI/UX",
      description:
        "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: "2",
      name: "Justin Case",
      region: "Yorkshire",
      jobtitle: "Front-end Dev",
      description: "Hardware: the part of the computer that you can kick.",
    },
  ];
  render(<BioList bootcampers={bioData} />);
  const nameOnBiography = screen.getByText("Kay Oss");
  expect(nameOnBiography).toBeInTheDocument();
});

test("Renders correct error message when no biographies handed in to BiosList.", () => {
  const bioData = [];
  render(<BioList bootcampers={bioData} />);
  const errorMessage = screen.getByText(
    "Sorry, we couldn't find anyone from School of Code based on your preferences"
  );
  expect(errorMessage).toBeInTheDocument();
});
