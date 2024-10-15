import { LuMessageCircle } from "react-icons/lu";

export default function Button({
  title = "Book Now",
  Icon = LuMessageCircle,
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      // className={`bg-gradient-lr flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3 ${className}`}
      // className={`bg-gradient-to-r from-blue-500 to-purple-500  flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition-colors, hover:bg-yellow-500 ${className}`}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 
        flex items-center gap-2 rounded-full 
        px-7 py-4 text-lg font-semibold 
        text-white transition duration-1000 ease-in-out
        hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-300
        ${className}`}

    >
      
      {title}
      <Icon className="size-5" />
    </button>
    
  );
}
