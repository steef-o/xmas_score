import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import { teams as TeamList } from "@/state/Atoms";
import { getRandomColor } from "@/utils/colorUtils";

const AddNewTeams = () => {
  const [teams, setTeams] = useAtom(TeamList);
  const [teamName, setTeamName] = useState("");

  const addTeam = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTeams([...teams, { points: [0], name: teamName, id: uuid(), color: getRandomColor() }]);
    setTeamName("");
  };

  return (
    <form className="mx-auto mt-20 flex max-w-3xl flex-col" onSubmit={(e) => addTeam(e)}>
      <label className="mx-auto" htmlFor="teamName">
        Team Navn
      </label>
      <input
        className="mx-auto mt-1 inline-block max-w-xs rounded-md p-2"
        type="text"
        id="teamName"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      {/* TODO: Icon picker for teams*/}
      <button
        className="mx-auto mt-4 block rounded-lg bg-green-700 py-2 px-16 text-white"
        type={"submit"}
      >
        Legg til nytt team
      </button>
    </form>
  );
};

export default AddNewTeams;
