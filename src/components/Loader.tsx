export const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#24313c]">
      {/* Loader Wrapper */}
      <div className="loader-wrapper flex justify-center items-center">
        <div className="loader"></div> {/* Loader Animation */}
      </div>
      
      {/* Loading Text */}
      <p className="text-center text-3xl text-white uppercase">Loading</p>
      
      {/* Ready Text */}
      <p className="text-center text-3xl text-white uppercase">Are you ready?</p>
    </div>
  );
};
