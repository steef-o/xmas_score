import { useAtom } from "jotai";

import { OperandType } from "@/components/PointButton";
import { teams as teamList } from "@/state/Atoms";

export const useUpdatePoints = () => {
  const [teams, setTeams] = useAtom(teamList);

  const updatePoints = (payload: { id: string; value: number; operand: OperandType }) => {
    const { id, value, operand } = payload;

    // Get index of selected team in teams.
    const index = teams.findIndex((team) => team.id === id);
    // Find selected team to update.
    const teamToUpdate = teams.find((team) => team.id === id);
    // Create new array with every team except the selected team.
    const otherTeams = teams.filter((team) => team.id !== id);

    // Return early if teamToUpdate is undefined.
    if (!teamToUpdate) return;

    // Add point(s) to total points.
    if (operand === "add") {
      teamToUpdate.points.push(value);
    }
    // Subtract point(s) from total points.
    if (operand === "subtract") {
      teamToUpdate.points.push(-value);
    }
    // Update teams with new array "in place" (preserving same indexes)
    setTeams([...otherTeams.slice(0, index), teamToUpdate, ...otherTeams.slice(index)]);
  };

  return { updatePoints };
};
