import { useAtom } from "jotai";

import { OperandType } from "@/components/PointButton";
import { teams as teamList } from "@/state/Atoms";

export const useUpdatePoints = () => {
  const [teams, setTeams] = useAtom(teamList);

  const updatePoints = (id: string, value: number, operand: OperandType) => {
    // Get index of team in teams.
    const index = teams.findIndex((team) => team.id === id);
    // Create new array with selected team to update.
    const teamToUpdate = teams.find((team) => team.id === id);
    // Create new array with every team except the selected team.
    const otherTeams = teams.filter((team) => team.id !== id);

    if (!teamToUpdate) return;

    // Add point(s) to total points.
    if (operand === "add") {
      teamToUpdate.points.push(value);
    }
    // Subtract point(s) from total points.
    if (operand === "subtract") {
      teamToUpdate.points.push(-value);
    }
    // Update teams with new array in place (same index)
    setTeams([...otherTeams.slice(0, index), teamToUpdate, ...otherTeams.slice(index)]);
  };

  return { updatePoints };
};
