const imgElements = "/assets/3f1c044fb13036747b1174a051a3877f9d91fcc5.svg";
const imgElements1 = "/assets/fc9e2e23c2ff3c5353edcad1479e4c1ef38e307f.svg";
const imgElements2 = "/assets/654aa406db4c75a3d82a2a2ff5f0cac1ad6bc2a3.svg";
const imgElements3 = "/assets/75a7e09eaee8ffb67a5bbfd3ab7081df4b47ca87.svg";
const imgElements4 = "/assets/bd9bc9ff5e0c0a32f456871c5671cf4b94e65c15.svg";
const imgElements5 = "/assets/394b4e352cb85e3ba4e76203ac3f6fd53584a279.svg";
const imgElements6 = "/assets/580744cce604b1654737a96878487cdfc4ef3af9.svg";
type ProgressBarLiveProps = {
  className?: string;
  state?: "Rest";
};

function ProgressBarLive({ className, state = "Rest" }: ProgressBarLiveProps) {
  return (
    <div className={className || "bg-[var(--color-gray-700,#494949)] h-[10px] relative rounded-[999px] w-[360px]"} data-node-id="190:1782">
      <div className="absolute bg-[var(--color-amber-500,#f4a903)] h-[10px] left-0 opacity-55 overflow-clip rounded-[999px] shadow-[0px_0px_4px_0px_rgba(244,169,3,0.25)] top-0 w-[133px]" data-node-id="237:2074" data-name="Fill">
        <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0)] h-[10px] left-[-90px] to-[rgba(255,255,255,0)] top-0 via-1/2 via-[rgba(255,255,255,0.85)] w-[90px]" data-node-id="237:2075" data-name="Shine" />
      </div>
    </div>
  );
}
type JourneyStepCardHighlightProps = {
  className?: string;
  state?: "Default";
};

function JourneyStepCardHighlight({ className, state = "Default" }: JourneyStepCardHighlightProps) {
  return (
    <div className={className || "bg-[var(--color-amber-500,#f4a903)] border-[1.5px] border-[rgba(255,215,148,0)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(244,169,3,0),0px_8px_12px_rgba(244,169,3,0)] flex flex-col gap-[20px] h-[431px] items-start p-[32px] relative rounded-[24px] w-[342px]"} data-node-id="200:1928">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="179:3048" data-name="Frame">
        <div className="bg-[var(--color-gray-900,#141414)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[52px]" data-node-id="179:3049" data-name="Frame">
          <div className="overflow-clip relative shrink-0 size-[26px]" data-node-id="179:3050" data-name="home-01">
            <div className="absolute inset-[8.33%]" data-node-id="I179:3050;1:68711" data-name="elements">
              <div className="absolute inset-[-3.75%]">
                <img alt="" className="block max-w-none size-full" src={imgElements} />
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans  font-bold leading-[var(--text-3xl--line-height,36px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-3xl,30px)] whitespace-nowrap" data-node-id="179:3051" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          04
        </p>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="179:3052" data-name="Frame">
        <p className="font-sans  font-semibold leading-[var(--text-2xl--line-height,32px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-2xl,24px)] w-[278px]" data-node-id="179:3053" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          You receive meaningful matches
        </p>
        <p className="font-sans  font-normal leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[length:var(--text-base,16px)] text-[rgba(20,20,20,0.8)] w-[278px]" data-node-id="179:3054" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          No endless scrolling. Only homes that fit you.
        </p>
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="179:3055" data-name="spacer" />
      <div className="bg-[var(--color-white,white)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="179:3056" data-name="Example">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="179:3057" data-name="Frame">
          <div className="bg-[var(--color-amber-500,#f4a903)] content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="179:3058" data-name="Button · Find my matches">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="179:3059" data-name="sparkles">
              <div className="absolute inset-[8.33%]" data-node-id="I179:3059;1:108869" data-name="elements">
                <div className="absolute inset-[-3.75%]">
                  <img alt="" className="block max-w-none size-full" src={imgElements1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-sans  font-medium leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="179:3060" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
              96% matches
            </p>
          </div>
          <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-sm--line-height,20px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-sm,14px)] whitespace-nowrap" data-node-id="179:3061" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            Albion Road, N16
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[56px] items-start pb-[64px] pt-[120px] px-[240px] relative w-[1920px] h-[1082px] overflow-clip" data-node-id="167:1433" data-name="Your home journey">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="167:1434" data-name="Head">
        <div className="content-stretch flex flex-col font-semibold gap-[16px] items-start leading-[var(--text-5xl--line-height,48px)] relative shrink-0 text-[length:var(--text-5xl,48px)] whitespace-nowrap" data-node-id="167:1435">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="167:1436">
            <p className="font-sans font-semibold relative shrink-0 text-[color:var(--color-amber-500,#f4a903)]" data-node-id="167:1437">{`You don't need `}</p>
            <p className="font-sans  relative shrink-0 text-[color:var(--color-amber-950,#45200a)]" data-node-id="167:1438" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
              to search for
            </p>
          </div>
          <p className="font-sans  relative shrink-0 text-[color:var(--color-amber-950,#45200a)]" data-node-id="167:1439" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            a home anymore.
          </p>
        </div>
        <p className="font-sans  font-normal leading-[var(--text-xl--line-height,28px)] opacity-90 relative shrink-0 text-[color:var(--color-amber-950,#45200a)] text-[length:var(--text-xl,20px)] w-[780px]" data-node-id="167:1440" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          Tell us once. We take care of the searching, the refreshing and the sorting — so finding a home feels calm, not like a second job.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="167:1441">
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="167:1442" data-name="Steps">
          <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex flex-col gap-[20px] h-[431px] items-start p-[32px] relative rounded-[24px] shrink-0 w-[342px]" data-node-id="167:1443" data-name="Step 01">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="167:1444" data-name="Frame">
              <div className="bg-[var(--color-amber-50,#fff9ee)] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[52px]" data-node-id="167:1445" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[26px]" data-node-id="167:1446" data-name="message-01">
                  <div className="absolute inset-[10.42%_8.33%]" data-node-id="I167:1446;1:8624" data-name="elements">
                    <div className="absolute inset-[-3.95%_-3.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgElements2} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-bold leading-[var(--text-3xl--line-height,36px)] relative shrink-0 text-[color:var(--color-gray-200,#e5e5e5)] text-[length:var(--text-3xl,30px)] whitespace-nowrap" data-node-id="167:1447" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                01
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="167:1448" data-name="Frame">
              <p className="font-sans  font-semibold leading-[var(--text-2xl--line-height,32px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-2xl,24px)] w-[278px]" data-node-id="167:1449" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Tell us your lifestyle
              </p>
              <p className="font-sans  font-normal leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[color:var(--color-gray-600,#585858)] text-[length:var(--text-base,16px)] w-[278px]" data-node-id="167:1450" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Say it in your own words — typed or spoken.
              </p>
            </div>
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="167:1451" data-name="spacer" />
            <div className="bg-[var(--color-gray-50,#fafafa)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="167:1452" data-name="Example">
              <p className="[word-break:break-word] font-sans  font-medium leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[color:var(--color-gray-800,#3a3a3a)] text-[length:var(--text-base,16px)] w-[250px]" data-node-id="167:1453" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                “I need a family home near good schools, with easy access to work.”
              </p>
            </div>
          </div>
          <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex flex-col gap-[20px] h-[431px] items-start p-[32px] relative rounded-[24px] shrink-0 w-[342px]" data-node-id="167:1454" data-name="Step 02">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="167:1455" data-name="Frame">
              <div className="bg-[var(--color-amber-50,#fff9ee)] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[52px]" data-node-id="167:1456" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[26px]" data-node-id="167:1457" data-name="brain-01">
                  <div className="absolute flex inset-[16.67%_8.33%] items-center justify-center" data-node-id="I167:1457;1:88392" style={{ containerType: "size" }}>
                    <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                      <div className="relative size-full" data-name="elements">
                        <div className="absolute inset-[-4.69%_-3.75%]">
                          <img alt="" className="block max-w-none size-full" src={imgElements3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-bold leading-[var(--text-3xl--line-height,36px)] relative shrink-0 text-[color:var(--color-gray-200,#e5e5e5)] text-[length:var(--text-3xl,30px)] whitespace-nowrap" data-node-id="167:1458" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                02
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="167:1459" data-name="Frame">
              <p className="font-sans  font-semibold leading-[var(--text-2xl--line-height,32px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-2xl,24px)] w-[278px]" data-node-id="167:1460" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                AI understands your priorities
              </p>
              <p className="font-sans  font-normal leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[color:var(--color-gray-600,#585858)] text-[length:var(--text-base,16px)] w-[278px]" data-node-id="167:1461" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Not just bedrooms and price — your lifestyle, preferences and needs.
              </p>
            </div>
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="167:1462" data-name="spacer" />
            <div className="bg-[var(--color-gray-50,#fafafa)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="167:1463" data-name="Example">
              <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="167:1464" data-name="Frame">
                <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="167:1465" data-name="Frame">
                  <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-800,#3a3a3a)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="167:1466" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    Good schools
                  </p>
                </div>
                <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="167:1467" data-name="Frame">
                  <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-800,#3a3a3a)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="167:1468" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    ≤ 40 min commute
                  </p>
                </div>
                <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="167:1469" data-name="Frame">
                  <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-800,#3a3a3a)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="167:1470" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    Garden
                  </p>
                </div>
                <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="167:1471" data-name="Frame">
                  <p className="[word-break:break-word] font-sans  font-semibold leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-800,#3a3a3a)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="167:1472" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    Family home
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex flex-col gap-[20px] h-[431px] items-start p-[32px] relative rounded-[24px] shrink-0 w-[342px]" data-node-id="167:1473" data-name="Step 03">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="167:1474" data-name="Frame">
              <div className="bg-[var(--color-amber-50,#fff9ee)] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[52px]" data-node-id="167:1475" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[26px]" data-node-id="167:1476" data-name="refresh">
                  <div className="absolute inset-[8.33%]" data-node-id="I167:1476;1:28438" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgElements4} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-sans  font-bold leading-[var(--text-3xl--line-height,36px)] relative shrink-0 text-[color:var(--color-gray-200,#e5e5e5)] text-[length:var(--text-3xl,30px)] whitespace-nowrap" data-node-id="167:1477" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                03
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="167:1478" data-name="Frame">
              <p className="font-sans  font-semibold leading-[var(--text-2xl--line-height,32px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-2xl,24px)] w-[278px]" data-node-id="167:1479" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                We search continuously
              </p>
              <p className="font-sans  font-normal leading-[var(--text-base--line-height,24px)] relative shrink-0 text-[color:var(--color-gray-600,#585858)] text-[length:var(--text-base,16px)] w-[278px]" data-node-id="167:1480" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                New properties are checked every day, so you never have to refresh.
              </p>
            </div>
            <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="167:1481" data-name="spacer" />
            <div className="bg-[var(--color-gray-50,#fafafa)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="167:1482" data-name="Example">
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="167:1483" data-name="Frame">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="167:1484" data-name="clock-01">
                  <div className="absolute inset-[8.33%]" data-node-id="I167:1484;1:21466" data-name="elements">
                    <div className="absolute inset-[-3.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgElements5} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="167:1485" data-name="Frame">
                  <p className="font-sans  font-semibold leading-[var(--text-sm--line-height,20px)] relative shrink-0 text-[color:var(--color-gray-900,#141414)] text-[length:var(--text-sm,14px)]" data-node-id="167:1486" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    Checked this morning
                  </p>
                  <p className="font-sans  font-normal leading-[var(--text-xs--line-height,16px)] relative shrink-0 text-[color:var(--color-gray-500,#686868)] text-[length:var(--text-xs,12px)]" data-node-id="167:1487" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    214 new London listings reviewed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <JourneyStepCardHighlight className="bg-[var(--color-amber-500,#f4a903)] border-[1.5px] border-[rgba(255,215,148,0)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(244,169,3,0),0px_8px_12px_rgba(244,169,3,0)] flex flex-col gap-[20px] h-[431px] items-start p-[32px] relative rounded-[24px] shrink-0 w-[342px]" />
        </div>
        <div className="bg-[var(--color-white,white)] border border-[var(--color-gray-200,#e5e5e5)] border-solid content-stretch flex gap-[20px] items-start overflow-clip p-[33px] relative rounded-[24px] shrink-0 w-full" data-node-id="167:1503" data-name="Founding members">
          <div className="flex-[1_0_0] min-w-px relative" data-node-id="167:1504" data-name="Copy">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="167:1505" data-name="Label">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="167:1506" data-name="user-multiple">
                  <div className="absolute inset-[14.58%_6.25%_12.5%_6.25%]" data-node-id="I167:1506;1:109517" data-name="elements">
                    <div className="absolute inset-[-5.14%_-4.28%_-5.15%_-4.29%]">
                      <img alt="" className="block max-w-none size-full" src={imgElements6} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-sans font-semibold font-semibold leading-[normal] not-relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap" data-node-id="167:1507" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                  Founding members
                </p>
              </div>
              <p className="[word-break:break-word] font-sans font-bold font-bold leading-[0] min-w-full not-relative shrink-0 text-[#141414] text-[34px] w-[min-content]" data-node-id="167:1508" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                <span className="font-sans font-medium font-medium leading-[normal] text-[#f4a903]">Be one of the first</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#45200a]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                  100 in London
                </span>
              </p>
              <p className="[word-break:break-word] font-sans font-normal font-normal leading-[1.55] min-w-full not-relative shrink-0 text-[#141414] text-[17px] w-[min-content]" data-node-id="167:1509" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                Early access before we open this up more widely — and you see new matches before anyone else does.
              </p>
            </div>
          </div>
          <div className="relative shrink-0" data-node-id="167:1510">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center relative size-full">
              <div className="content-stretch flex flex-col gap-[12px] h-[53px] items-start overflow-clip relative shrink-0 w-[360px]" data-node-id="167:1511" data-name="Places meter">
                <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-overflow-clip relative shrink-0 text-[#0d0d0d] text-[14px] w-full whitespace-nowrap" data-node-id="167:1512" data-name="Count">
                  <p className="font-sans font-semibold font-semibold relative shrink-0" data-node-id="167:1513" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    37 places claimed
                  </p>
                  <p className="font-sans font-medium font-medium relative shrink-0" data-node-id="167:1514" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                    63 left
                  </p>
                </div>
                <ProgressBarLive className="bg-[var(--color-gray-700,#494949)] h-[10px] relative rounded-[999px] shrink-0 w-[360px]" />
              </div>
              <div className="bg-[#f4a903] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-node-id="167:1517">
                <p className="[word-break:break-word] font-sans font-semibold font-semibold leading-[28px] not-relative shrink-0 text-[14px] text-[color:var(--color-amber-950,#45200a)] whitespace-nowrap" data-node-id="167:1518" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
                  Join the First 100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}