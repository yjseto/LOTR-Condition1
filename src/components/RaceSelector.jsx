import { useState } from "react";

export default function RaceSelector({ onSelect }) {
  const races = [
    { name: "Elf", img: "/images/elf.jpg" },
    { name: "Dwarf", img: "/images/dwarf.jpg" },
    { name: "Hobbit", img: "/images/hobbit.jpg" },
    { name: "Man", img: "/images/man.jpg" },
    { name: "Wizard", img: "/images/wizard.jpg" },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + races.length) % races.length);
  const next = () => setIndex((index + 1) % races.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {races.map((race) => (
          <div key={race.name} className="flex-none w-full flex justify-center">
            <div
              className="w-[300px] h-[180px] rounded-xl overflow-hidden border-2 border-lotrGold shadow-lg bg-lotrWood"
            >
              <img
                src={race.img}
                alt={race.name}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
              <p className="text-center text-lotrParchment font-lotrSerif py-2 bg-lotrBlack">
                {race.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-lotrGold text-3xl hover:text-lotrParchment px-3"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-lotrGold text-3xl hover:text-lotrParchment px-3"
      >
        ❯
      </button>
    </div>
  );
}
