"use client";

export const IACoreMap = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-full font-mono text-xs">
      <div className="bg-ink text-canvas px-8 py-3 rounded-md shadow-lg z-10 font-bold tracking-widest">00_HOME (首頁)</div>
      <div className="w-px h-6 bg-ink/20 -my-6 z-0"></div>

      <div className="flex w-full justify-between relative mt-4">
        {/* Horizontal connection line */}
        <div className="absolute top-0 left-[16%] right-[16%] h-px bg-ink/20 -z-10"></div>

        {/* Branch 1 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-ink/10 px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">01_CATEGORIES</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>🛋️ 客廳 (Living)</p>
            <p>🛏️ 臥室 (Bedroom)</p>
            <p>🍳 廚房 (Kitchen)</p>
            <p>🪴 植物與器皿</p>
            <p>🕯️ 香氛燭台</p>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-cedar text-cedar px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">02_OUR_EDIT</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>職人故事 (Artisans)</p>
            <p>材質哲學 (Materials)</p>
            <p>永續承諾 (Sustainability)</p>
          </div>
        </div>

        {/* Branch 3 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-ink/10 px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">03_ROOMS</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>25坪以下小空間</p>
            <p>北歐風格搭配</p>
            <p>禪意日式空間</p>
            <p>台灣老屋改造</p>
          </div>
        </div>
      </div>
    </div>
  );
};
