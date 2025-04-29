import ScrollAnimate from "./General/Animate";

export default function AboutSection() {
  return (
    <section className="py-30 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Left: Photo */}

        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full">
            <ScrollAnimate direction="left">
              <img
                src="/images/about.avif"
                alt="Teaching Teachers"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </ScrollAnimate>
          </div>
        </div>

        {/* Right: Text */}

        <div className="md:w-1/2 w-full">
          <ScrollAnimate direction="right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              About Us
            </h2>
            <p className="text-lg mb-4">
              <strong>Section 8 Company for Teaching Teachers</strong>
            </p>
            <p className="text-lg mb-4">
              We are a Section 8 non-profit organization dedicated to
              transforming education by empowering teachers. Our mission is to
              provide innovative training, resources, and support to educators,
              enabling them to inspire and nurture the next generation of
              learners.
            </p>
            <p className="text-lg mb-4">
              Through workshops, mentorship, and community programs, we bridge
              the gap between traditional teaching methods and modern
              educational needs. We believe that by investing in teachers, we
              invest in the future of our society.
            </p>
            {/* <ul className="list-disc pl-5 text-lg mb-4">
            <li>Professional development workshops for teachers</li>
            <li>Collaborative learning communities</li>
            <li>Mentorship and leadership programs</li>
            <li>Resources for innovative classroom practices</li>
            <li>Focus on underprivileged and rural educators</li>
          </ul> */}
            <p className="text-lg">
              Join us in our journey to make quality education accessible and
              impactful for all!
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
