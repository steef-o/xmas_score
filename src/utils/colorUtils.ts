export const borderColors: Record<string, string> = {
  red: "border-t-red-500",
  orange: "border-t-orange-500",
  green: "border-t-green-500",
  blue: "border-t-blue-500",
  yellow: "border-t-yellow-500",
  purple: "border-t-purple-500",
  pink: "border-t-pink-500",
  lime: "border-t-lime-500",
  amber: "border-t-amber-500",
  emerald: "border-t-emerald-500",
  cyan: "border-t-cyan-500",
  indigo: "border-t-indigo-500",
  rose: "border-t-rose-500",
  fuchsia: "border-t-fuchsia-500",
};

// function for picking a random key from borderColors record
export const getRandomColor = () => {
  const keys = Object.keys(borderColors);
  return keys[(keys.length * Math.random()) << 0];
};
