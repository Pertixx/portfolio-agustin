import { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const words = [
    "Accessible",
    "Performant",
    "Secure",
    "Interactive",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Usable",
    "Reliable"
  ]

  return (
    <div className="py-16 lg:py24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div 
            className="flex flex-none gap-20 pr-20 py-3 animate-move-left [animation-duration:30s]"
            style={{
              transform: 'translateX(-100px)'
            }}
          >
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {
                  words.map((word, index) => (
                    <div key={index} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))
                }
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
