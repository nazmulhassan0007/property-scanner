const imgPhoto = "/assets/schools.jpg";
const imgPhoto1 = "/assets/commute.jpg";
const imgPhoto2 = "/assets/green.jpg";
const imgPhoto3 = "/assets/markets.jpg";
const imgElements = "/assets/9e2b12f9be8ece58a440b1e1de59f47be1c93012.svg";
const imgElements1 = "/assets/fac3c6ff2ce924f6903a033e5681d714e3db067e.svg";
const imgElements2 = "/assets/3d4144c7847caeda9003441b4a6c18e8a5684537.svg";
const imgElements3 = "/assets/a571df7ab72fd7f13cd8ca4e6841975e384ab6bd.svg";
const imgElements4 = "/assets/d0cfceead2f404e1e5bb0942db9ebdcee474fc73.svg";
type LifestyleTileProps = {
  className?: string;
  state?: "Default";
  tile?: "Schools" | "Commute" | "Green space" | "Markets";
};

function LifestyleTile({ className, state = "Default", tile = "Schools" }: LifestyleTileProps) {
  const isCommuteAndDefault = tile === "Commute" && state === "Default";
  const isGreenSpaceAndDefault = tile === "Green space" && state === "Default";
  const isMarketsAndDefault = tile === "Markets" && state === "Default";
  const isSchoolsAndDefault = tile === "Schools" && state === "Default";
  return (
    <div className={className || "bg-[var(--color-gray-200,#e5e5e5)] h-[320px] overflow-clip relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(10,10,10,0)] w-[342px]"} id={isMarketsAndDefault ? "node-199_1837" : isGreenSpaceAndDefault ? "node-199_1828" : isCommuteAndDefault ? "node-199_1819" : "node-199_1810"}>
      <div className="absolute h-[320px] left-0 top-0 w-[342px]" id={isMarketsAndDefault ? "node-179_2882" : isGreenSpaceAndDefault ? "node-179_2874" : isCommuteAndDefault ? "node-179_2866" : "node-179_2858"} data-name="Photo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={isMarketsAndDefault ? imgPhoto3 : isGreenSpaceAndDefault ? imgPhoto2 : isCommuteAndDefault ? imgPhoto1 : imgPhoto} />
      </div>
      <div className="absolute bg-gradient-to-b from-[35%] from-[rgba(10,10,10,0)] h-[320px] left-0 to-[rgba(10,10,10,0.82)] top-0 w-[342px]" id={isMarketsAndDefault ? "node-179_2883" : isGreenSpaceAndDefault ? "node-179_2875" : isCommuteAndDefault ? "node-179_2867" : "node-179_2859"} data-name="Scrim" />
      <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[24px] overflow-clip top-[244px]" id={isMarketsAndDefault ? "node-179_2884" : isGreenSpaceAndDefault ? "node-179_2876" : isCommuteAndDefault ? "node-179_2868" : "node-179_2860"} data-name="Frame">
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" id={isMarketsAndDefault ? "node-179_2885" : isGreenSpaceAndDefault ? "node-179_2877" : isCommuteAndDefault ? "node-179_2869" : "node-179_2861"} data-name="Frame">
          {isSchoolsAndDefault && (
            <>
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="179:2862" data-name="school-01">
                <div className="absolute inset-[8.33%]" data-node-id="I179:2862;1:142742" data-name="elements">
                  <div className="absolute inset-[-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={imgElements} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xl--line-height,28px)] relative shrink-0 text-[color:var(--color-white,white)] text-[length:var(--text-xl,20px)] whitespace-nowrap" data-node-id="179:2863" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Near great schools
              </p>
            </>
          )}
          {isCommuteAndDefault && (
            <>
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="179:2870" data-name="train-01">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I179:2870;1:113986" data-name="elements">
                  <div className="absolute inset-[-3.75%_-4.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgElements1} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xl--line-height,28px)] relative shrink-0 text-[color:var(--color-white,white)] text-[length:var(--text-xl,20px)] whitespace-nowrap" data-node-id="179:2871" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Under 30 mins to work
              </p>
            </>
          )}
          {isGreenSpaceAndDefault && (
            <>
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="179:2878" data-name="sun-03">
                <div className="absolute inset-[8.33%]" data-node-id="I179:2878;1:107713" data-name="elements">
                  <div className="absolute inset-[-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={imgElements2} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xl--line-height,28px)] relative shrink-0 text-[color:var(--color-white,white)] text-[length:var(--text-xl,20px)] whitespace-nowrap" data-node-id="179:2879" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Green space nearby
              </p>
            </>
          )}
          {isMarketsAndDefault && (
            <>
              <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="179:2886" data-name="store-01">
                <div className="absolute inset-[10.42%_8.33%]" data-node-id="I179:2886;1:39010" data-name="elements">
                  <div className="absolute inset-[-3.95%_-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={imgElements3} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xl--line-height,28px)] relative shrink-0 text-[color:var(--color-white,white)] text-[length:var(--text-xl,20px)] whitespace-nowrap" data-node-id="179:2887" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`Markets & cafés`}</p>
            </>
          )}
        </div>
        <p className={`[word-break:break-word] font-sans  font-normal leading-[var(--text-sm--line-height,20px)] relative shrink-0 text-[length:var(--text-sm,14px)] text-[rgba(255,255,255,0.8)] ${isGreenSpaceAndDefault ? "whitespace-nowrap" : "w-[290px]"}`} id={isMarketsAndDefault ? "node-179_2888" : isGreenSpaceAndDefault ? "node-179_2880" : isCommuteAndDefault ? "node-179_2872" : "node-179_2864"} style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          {isMarketsAndDefault ? "High streets with a neighbourhood feel" : isGreenSpaceAndDefault ? "Parks, heaths and gardens on your doorstep" : isCommuteAndDefault ? "Door to desk, measured on real routes" : "Outstanding-rated, within walking distance"}
        </p>
      </div>
    </div>
  );
}

export default function Lifestyle() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start px-[240px] py-[112px] relative w-[1920px] h-[676px] overflow-clip" data-node-id="167:1390" data-name="Explore by lifestyle">
      <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="167:1391" data-name="Head">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="167:1392" data-name="Frame">
          <div className="content-stretch flex font-semibold gap-[12px] items-start leading-[var(--text-5xl--line-height,48px)] relative shrink-0 text-[length:var(--text-5xl,48px)]" data-node-id="167:1393">
            <p className="font-serif font-semibold italic relative shrink-0 text-[color:var(--color-amber-500,#f4a903)]" data-node-id="167:1394">
              Explore London
            </p>
            <p className="font-sans  relative shrink-0 text-[color:var(--color-amber-950,#45200a)]" data-node-id="167:1395" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
              by the way you live
            </p>
          </div>
          <p className="font-sans  font-normal leading-[var(--text-xl--line-height,28px)] opacity-90 relative shrink-0 text-[color:var(--color-amber-950,#45200a)] text-[length:var(--text-xl,20px)]" data-node-id="167:1396" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{`Tell us what matters to you. We'll find the streets and homes that match.`}</p>
        </div>
        <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="167:1397" data-name="Frame">
          <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[color:var(--color-amber-500,#f4a903)] text-[length:var(--text-base,16px)] whitespace-nowrap" data-node-id="167:1398" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            See how matching works
          </p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="167:1399" data-name="arrow-right-01">
            <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="I167:1399;1:127162" data-name="elements">
              <div className="absolute inset-[-6.25%_-12.5%]">
                <img alt="" className="block max-w-none size-full" src={imgElements4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-node-id="204:3390">
        <LifestyleTile className="bg-[var(--color-gray-200,#e5e5e5)] h-[320px] overflow-clip relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(10,10,10,0)] shrink-0 w-[342px]" />
        <LifestyleTile className="bg-[var(--color-gray-200,#e5e5e5)] h-[320px] overflow-clip relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(10,10,10,0)] shrink-0 w-[342px]" tile="Commute" />
        <LifestyleTile className="bg-[var(--color-gray-200,#e5e5e5)] h-[320px] overflow-clip relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(10,10,10,0)] shrink-0 w-[342px]" tile="Green space" />
        <LifestyleTile className="bg-[var(--color-gray-200,#e5e5e5)] h-[320px] overflow-clip relative rounded-[20px] shadow-[0px_4px_12px_0px_rgba(10,10,10,0)] shrink-0 w-[342px]" tile="Markets" />
      </div>
    </div>
  );
}