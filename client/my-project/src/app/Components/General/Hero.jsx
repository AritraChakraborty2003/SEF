// components/PageHero.tsx
export default function PageHero({ image, title, subtitle }) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
