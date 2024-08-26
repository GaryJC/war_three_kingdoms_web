export default function Homepage() {
  return (
    <div className="w-full h-[850px] bg-[url('/img/bg_main.png')] bg-cover flex flex-col items-center justify-center">
      <img
        src="/img/logo_game.png"
        alt="logo"
        className="sm:w-[50vw] w-[90vw]"
      />
      <div className="flex items-center gap-2 border-2 p-2 rounded-full">
        <img
          src="/img/logo_app_1.jpg"
          alt="app store"
          className="w-[50px] rounded-full"
        />
        <p className="text-2xl font-bold text-slate-300">DOWNLOAD</p>
      </div>
    </div>
  );
}
