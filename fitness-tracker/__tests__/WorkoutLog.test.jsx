import { render, fireEvent, screen } from "@testing-library/react";
import WorkoutLog from "../src/components/WorkoutLog";

test("requires at least one exercise before save", () => {
  const onSave = jest.fn();
  render(<WorkoutLog onSave={onSave} />);
  fireEvent.click(screen.getByText(/Save Workout/i));
  expect(onSave).not.toHaveBeenCalled();
});