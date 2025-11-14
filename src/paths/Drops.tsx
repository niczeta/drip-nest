import { Button } from "../components/Button";
import { Zap, TrendingUp, Clock } from "lucide-react";

export const Drops = () => {
  // Featured drop data
  const upcomingDrop = {
    id: 1,
    name: "Air Jordan 40 Chicago",
    brand: "Air Jordan",
    releaseDate: "2025-11-1",
    image: "/drop/j-40-chicago.webp",
    description: "Exclusive collaboration with top designers. Only 500 pairs worldwide.",
    price: "$205",
    status: "Coming Soon"
  };

  // Other drops in the pipeline
  const upcomingDrops = [
    {
      id: 2,
      name: "New Balance 2002R",
      brand: "New Balance",
      releaseDate: "2025-11-25",
      image: "/drop/nb-2002r.png",
      price: "$150"
    },
    {
      id: 3,
      name: "Nike SB Dunk Low Pro",
      brand: "Nike SB",
      releaseDate: "2025-12-01",
      image: "/drop/nike-dunk.png",
      price: "$110"
    },
    {
      id: 4,
      name: "Adidas Yeezy Boost 700",
      brand: "Yeezy",
      releaseDate: "2025-12-10",
      image: "/drop/yeezy-700.png",
      price: "$280"
    }
  ];

  return (
    <>
      {/* Hero section for drops - with extra top padding to avoid navbar overlap */}
      <section className="bg-neutral-900 text-white py-16 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={24} className="text-red-500" />
            <span className="text-red-500 font-semibold uppercase">Exclusive Drops</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Next Level Releases
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Stay ahead of the game. Get notified about the latest and most anticipated sneaker drops, collaborations, and limited releases.
          </p>
        </div>
      </section>

      {/* Featured drop section */}
      <section className="bg-neutral-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp size={28} className="text-red-500" />
            Featured Drop
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
            {/* Featured drop image */}
            <img
              src={upcomingDrop.image}
              alt={upcomingDrop.name}
              className="w-full h-96 object-cover"
            />

            {/* Featured drop details */}
            <div className="p-8 flex flex-col gap-6">
              <div>
                <span className="text-red-500 font-semibold text-sm uppercase">{upcomingDrop.brand}</span>
                <h3 className="text-3xl font-bold mt-2">{upcomingDrop.name}</h3>
              </div>

              <p className="text-neutral-300">
                {upcomingDrop.description}
              </p>

              <div className="flex items-center gap-2 text-yellow-400">
                <Clock size={20} />
                <span className="font-semibold">Release: {new Date(upcomingDrop.releaseDate).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-400">{upcomingDrop.price}</span>
                <span className="px-4 py-2 bg-red-600 rounded-lg font-semibold uppercase text-sm">
                  {upcomingDrop.status}
                </span>
              </div>

              <Button
                label="Notify Me"
                link="#"
                variant="primary"
                size="lg"
                fullWidth
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other upcoming drops section */}
      <section className="bg-neutral-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Other Upcoming Drops</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingDrops.map((drop) => (
              <div
                key={drop.id}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* Drop image */}
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-64 object-cover"
                />

                {/* Drop details */}
                <div className="p-4 flex flex-col gap-3 h-48">
                  <div>
                    <span className="text-red-500 font-semibold text-xs uppercase">{drop.brand}</span>
                    <h4 className="text-lg font-bold mt-1">{drop.name}</h4>
                  </div>

                  {/* Spacer to push content to bottom */}
                  <div className="flex-grow" />

                  <div className="flex items-center gap-2 text-yellow-400 text-sm">
                    <Clock size={16} />
                    <span>{new Date(drop.releaseDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-400">{drop.price}</span>
                    <Button
                      label="Details"
                      link="#"
                      variant="outline"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
