export default function QuestionCard({
  question,
  inputValue,
  setInputValue,
  onNext,
  isLast,
}) {
  const isRaceQuestion = question.toLowerCase().includes("race");
  const isAestheticQuestion = question.toLowerCase().includes("aesthetic");

  const races = [
    { name: "Elf", img: "/images/elf.jpg" },
    { name: "Dwarf", img: "/images/dwarf.jpg" },
    { name: "Hobbit", img: "/images/hobbit.jpg" },
    { name: "Man", img: "/images/man.jpg" },
    { name: "Wizard", img: "/images/gandalfs-big-naturals-v0-nisa9w4335oa1.jpg" },
    { name: "Orc", img: "/images/orc.jpg" },
  ];

  const aesthetics = [
    { name: "realistic", img: "/images/realistic.jpg" },
    { name: "gothic", img: "/images/gothic.jpg" },
    { name: "abstract", img: "/images/abstract.jpg" },
    { name: "pastel", img: "/images/pastel.jpg" },
    { name: "renaissance", img: "/images/renaissance.jpg" },
  ];

  const renderInput = () => {
    if (isRaceQuestion) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {races.map((race) => (
            <button
              key={race.name}
              onClick={() => setInputValue(race.name)}
              className={`rounded-lg overflow-hidden border-1 ${
                inputValue === race.name
                  ? "border-lotrGold scale-105"
                  : "border-transparent"
              } transition transform hover:scale-105`}
            >
              <img
                src={race.img}
                alt={race.name}
                className="w-full h-24 object-cover"
              />
              <p className="text-sm font-lotrLower text-lotrParchment mt-1">
                {race.name}
              </p>
            </button>
          ))}
        </div>
      );
    } else if (isAestheticQuestion) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {aesthetics.map((style) => (
            <button
              key={style.name}
              onClick={() => setInputValue(style.name)}
              className={`rounded-lg overflow-hidden border-1 ${
                inputValue === style.name
                  ? "border-lotrGold scale-105"
                  : "border-transparent"
              } transition transform hover:scale-105`}
            >
              <img
                src={style.img}
                alt={style.name}
                className="w-full h-24 object-cover"
              />
              <p className="text-sm font-lotrLower text-lotrParchment mt-1">
                {style.name}
              </p>
            </button>
          ))}
        </div>
      );
    } else {
      return (
        <input
          type="text"
          className="w-full rounded-lg p-3 font-lotrLower bg-lotrWood text-lotrParchment outline-none focus:ring-1 focus:ring-lotrGold animate-fadeIn"
          placeholder="Your answer..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      );
    }
  };

  return (
    <div className="w-full max-w-md text-center">
      <p className="text-xl mb-4 font-lotrLower text-lotrParchment">
        {question}
      </p>

      {renderInput()}

      <button
        onClick={onNext}
        className="mt-6 btn-primary animate-fadeIn"
        disabled={!inputValue.trim()}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}
