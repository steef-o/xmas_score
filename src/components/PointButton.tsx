import { useUpdatePoints } from "@/hooks/useUpdatePoints";

export type OperandType = "add" | "subtract";

const OperandColor: Record<OperandType, string> = {
  add: "bg-green-200",
  subtract: "bg-red-200",
};

interface PointButtonProps {
  value: number;
  operand: OperandType;
  buttonText: string;
  id: string;
}

const PointButton = ({ value, operand, buttonText, id }: PointButtonProps) => {
  const { updatePoints } = useUpdatePoints();
  return (
    <button
      onClick={() => updatePoints(id, value, operand)}
      className={`visibleChildOnHover my-1 rounded-[50%] p-1 text-lg opacity-0 active:scale-110 ${OperandColor[operand]}`}
    >
      {buttonText}
    </button>
  );
};

export default PointButton;
