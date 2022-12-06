import { useAtom } from "jotai";

import { teams as teamList } from "../state/Atoms";

import TeamCard from "~/components/TeamCard";

const GameBoard = () => {
  const [teams, setTeams] = useAtom(teamList);

  const addPoint = (id: string) => {
    // Get index of team in teams.
    const index = teams.findIndex((team) => team.id === id);
    // Create new array with selected team to update.
    const teamToUpdate = teams.find((team) => team.id === id);
    // Create new array with every team except the selected team.
    const otherTeams = teams.filter((team) => team.id !== id);
    if (teamToUpdate) {
      teamToUpdate.points = teamToUpdate.points + 1;
      // Update teams with new array in place (same index)
      setTeams([...otherTeams.slice(0, index), teamToUpdate, ...otherTeams.slice(index)]);
    }
  };

  const subtractPoint = (id: string) => {
    // Get index of team in teams.
    const index = teams.findIndex((team) => team.id === id);
    // Create new array with selected team to update.
    const teamToUpdate = teams.find((team) => team.id === id);
    // Create new array with every team except the selected team.
    const otherTeams = teams.filter((team) => team.id !== id);
    if (teamToUpdate) {
      teamToUpdate.points = teamToUpdate.points - 1;
      // Update teams with new array in place (same index)
      setTeams([...otherTeams.slice(0, index), teamToUpdate, ...otherTeams.slice(index)]);
    }
  };

  const removeTeamById = (id: string) => {
    setTeams([...teams.filter((team) => team.id !== id)]);
  };

  return (
    <main className="mx-auto min-h-[36rem] max-w-project rounded-lg bg-red-400 px-10">
      <h1 className="mt-24 pt-4 text-center text-3xl font-bold text-white">
        Webstep X-mas scoreboard
      </h1>
      <ul className="mt-10 grid grid-cols-4 gap-4">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            addPoint={addPoint}
            removePoint={subtractPoint}
            removeTeamById={removeTeamById}
          />
        ))}
      </ul>
    </main>
  );
};

export default GameBoard;
