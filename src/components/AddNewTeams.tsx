import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Team } from "~/TeamCard";

interface AddNewTeamsProps {
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}
const AddNewTeams = ({ teams, setTeams }: AddNewTeamsProps) => {
  const [teamName, setTeamName] = useState("");
  const addTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTeams([...teams, { points: 0, name: teamName, id: uuid() }]);
    setTeamName("");
  };

  return (
    <>
      <form className="mx-auto mt-20 flex max-w-3xl flex-col">
        <label className="mx-auto" htmlFor="teamName">
          Team Name
        </label>
        <input
          className="mx-auto mt-1 inline-block max-w-xs rounded-lg"
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        {/* TODO: Icon picker for teams*/}
      </form>
      <button
        className="mx-auto mt-4 block rounded-lg bg-green-700 py-2 px-16 text-white"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => addTeam(e)}
      >
        Legg til nytt team
      </button>
    </>
  );
};

export default AddNewTeams;
