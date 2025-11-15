// export const Loader = () => {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-neutral-950">
//       {/* Loader Wrapper */}
//       <div className="loader-wrapper flex justify-center items-center">
//         <div className="loader"></div> {/* Loader Animation */}
//       </div>
      
//       {/* Loading Text */}
//       <p className="text-center text-3xl text-white uppercase">Loading</p>
      
//       {/* Ready Text */}
//       <p className="text-center text-3xl text-white uppercase">Are you ready?</p>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

function useIsMobile(maxWidth = 700) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= maxWidth);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [maxWidth]);
  return isMobile;
}

export const Loader = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-neutral-950 z-50">
      {isMobile ? (
        // LOADER MOBILE stile checkout con testo bianco
        <div className="flex flex-col items-center gap-6">
          <Loader2 className="animate-spin text-red-500" size={64} />
          <h2 className="text-2xl font-semibold text-white">Loading...</h2>
        </div>
      ) : (
        // LOADER DESKTOP: atomo
        <>
          <div className="loader-wrapper flex justify-center items-center">
            <div className="loader"></div>
          </div>
          <p className="text-center text-3xl text-white uppercase">Loading</p>
          <p className="text-center text-3xl text-white uppercase">Are you ready?</p>
        </>
      )}
    </div>
  );
};
