import { Trash } from "phosphor-react";
import { useState } from "react";

import PointButton from "@/components/PointButton";
import { Team } from "@/state/Atoms";
import { borderColors } from "@/utils/colorUtils";

interface TeamCardProps {
  team: Team;
  removeTeamById: (id: string) => void;
}

const TeamCard = ({ team, removeTeamById }: TeamCardProps) => {
  const [cardClicked, setCardClicked] = useState(false);

  const isPositive = team.points[team.points.length - 1] > 0;
  const isNegative = team.points[team.points.length - 1] < 0;

  const handleCardClick = () => {
    setCardClicked(true);
    setTimeout(() => {
      setCardClicked(false);
    }, 1000);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`card relative flex h-64 flex-col rounded-md border-t-[12px] border-t-green-500 bg-white p-4 ${
        borderColors[team.color]
      }`}
    >
      <h2 className="text-center font-serif text-3xl font-bold">{team.name}</h2>
      <button
        className="visibleChildOnHover absolute top-5 rounded-md bg-gray-200 p-2 opacity-0 active:scale-110"
        onClick={() => removeTeamById(team.id)}
      >
        <Trash />
      </button>
      <div className="mt-10 flex">
        <div className="flex flex-col">
          <PointButton value={1} operand="subtract" id={team.id} buttonText="-1" />
          <PointButton value={5} operand="subtract" id={team.id} buttonText="-5" />
          <PointButton value={10} operand="subtract" id={team.id} buttonText="-10" />
        </div>
        <div className="flex w-full flex-col">
          <span
            className={`flex justify-center text-green-500 ${
              isPositive && cardClicked ? "opacity-100" : "fadeOut"
            }`}
          >
            +{team.points[team.points.length - 1]}
          </span>

          <h3 className="mx-auto py-2 text-4xl">
            {team.points.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
          </h3>
          <span
            className={`flex justify-center text-red-500 ${
              isNegative && cardClicked ? "opacity-100" : "fadeOut"
            }`}
          >
            {team.points[team.points.length - 1]}
          </span>
        </div>
        <div className="flex flex-col">
          <PointButton value={1} operand="add" id={team.id} buttonText="+1" />
          <PointButton value={5} operand="add" id={team.id} buttonText="+5" />
          <PointButton value={10} operand="add" id={team.id} buttonText="+10" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
