interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative h-[94vh] flex items-center justify-center">
      <img
        src="/images/ngo.avif"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl w-[95%] font-bold ml-5 mb-4 leading-relaxed">
          Empowering Change, One Step at a Time
        </h1>

        <p className="mb-6 text-lg pl-2 pr-2 lg:pl-0 lg:pr-0">
          Join us in making a difference for education and society.
        </p>
        <button
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
          onClick={onDonateClick}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
}
