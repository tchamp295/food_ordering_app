const CustomScrollButton = ({ type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        bg-red-600 hover:bg-red-700
        rounded-full shadow-lg
        text-white
        transition-all duration-200
        hover:scale-105
        z-10
        ${type === "prev" ? "-left-6" : "-right-6"}
       
      `}
    >
      {type === "prev" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};

export default CustomScrollButton;
