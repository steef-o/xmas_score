import { useAtom } from "jotai";

import { Team, teams as teamList } from "../state/Atoms";

import TeamCard from "~/components/TeamCard";

const GameBoard = () => {
  const [teams, setTeams] = useAtom(teamList);

  /*
   * TODO: BUGFIX
   * Updating state this way breaks the sort ordering of the cards as the updated card
   * this is moved to the end of the list. This is a bug that needs to be fixed.
   */

  const addPoint = (team: Team) => {
    const teamToUpdate = teams.find((item) => item.id === team.id);
    const otherTeams = teams.filter((item) => item.id !== team.id);
    if (teamToUpdate) {
      teamToUpdate.points = teamToUpdate.points + 1;
      setTeams([...otherTeams, teamToUpdate]);
    }
  };
  const removePoint = (team: Team) => {
    const teamToUpdate = teams.find((item) => item.id === team.id);
    const otherTeams = teams.filter((item) => item.id !== team.id);
    if (teamToUpdate) {
      teamToUpdate.points = teamToUpdate.points - 1;
      setTeams([...otherTeams, teamToUpdate]);
    }
  };

  const removeTeamById = (id: string) => {
    setTeams([...teams.filter((item) => item.id !== id)]);
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
            removePoint={removePoint}
            removeTeamById={removeTeamById}
          />
        ))}
      </ul>
    </main>
  );
};

export default GameBoard;
