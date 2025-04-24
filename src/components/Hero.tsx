export const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/jordan-vid.mp4" type="video/mp4" />
      Your browser does not support the video.
    </video>

    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

    {/* Content on top of the video */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase">
        Welcome to Drip-Nest
      </h1>
      <p className="text-2xl md:text-3xl uppercase">
        Your trusted online sneaker boutique
      </p>
    </div>
  </section>
);
