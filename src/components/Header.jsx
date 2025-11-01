export default function Header() {
  return (
    <div className="flex flex-col items-center justify-start pt-[15vh] p-6 bg-lotrBlack w-full text-center">
      <header className="mb-8">
        <h1
          className="text-4xl font-lotrDecorative  bg-gradient-to-b from-lotrGold to-[#7a5c24] text-transparent bg-clip-text"
        >
          LOTR Feelings Visualizer
        </h1>
      </header>

      <div className="relative flex items-center justify-center my-1 w-full">
        <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-lotrGold to-transparent blur-[0.5px]"></div>
      </div>



    </div>

    
  );
}
