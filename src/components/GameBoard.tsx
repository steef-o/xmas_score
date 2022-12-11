import { useAtom } from "jotai";

import TeamCard from "@/components/TeamCard";
import { getText } from "@/services/textService";
import { teams as teamList } from "@/state/Atoms";

const GameBoard = () => {
  const [teams, setTeams] = useAtom(teamList);

  const removeTeamById = (id: string) => {
    setTeams([...teams.filter((team) => team.id !== id)]);
  };

  return (
    <main className="mx-auto min-h-[36rem] max-w-project rounded-lg bg-red-400 px-6 pb-6">
      <h1 className="mt-24 pt-6 text-center font-serif text-5xl font-bold text-white">
        {getText("page.title")}
      </h1>
      <section className="mt-10 grid grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} removeTeamById={removeTeamById} />
        ))}
      </section>
    </main>
  );
};

export default GameBoard;
