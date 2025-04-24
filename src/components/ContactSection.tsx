import { Mail, Phone, MapPin, Clock, Linkedin, Github, Triangle } from "lucide-react";

export const ContactSection = () => (
  <section
    id="contact"
    className="bg-neutral-950 text-white px-6 py-20 md:py-28"
  >
    <div className="md:max-w-6xl mx-14 md:mx-auto text-center md:px-0">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-28">Hire me</h2>

      {/* Responsive grid for contact methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-24 text-left text-base">

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">E-mail</h3>
            <p className="text-neutral-400">nicolemisuraca@outlook.it</p>
          </div>
        </div>

        {/* Phone number */}
        <div className="flex items-start gap-4">
          <Phone className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-neutral-400">+39 334 391 5430</p>
          </div>
        </div>

        {/* Physical location */}
        <div className="flex items-start gap-4">
          <MapPin className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-neutral-400">Rome, Italy</p>
          </div>
        </div>

        {/* Availability info */}
        <div className="flex items-start gap-4">
          <Clock className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Hours</h3>
            <p className="text-neutral-400">24/7 – Always available</p>
          </div>
        </div>

        {/* LinkedIn profile link */}
        <div className="flex items-start gap-4">
          <Linkedin className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nicolemisuraca/"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nicole Misuraca
            </a>
          </div>
        </div>

        {/* GitHub profile link */}
        <div className="flex items-start gap-4">
          <Github className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">GitHub</h3>
            <a
              href="https://github.com/niczeta"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/niczeta
            </a>
          </div>
        </div>

        {/* Vercel dashboard link */}
        <div className="flex items-start gap-4">
          <Triangle className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Vercel</h3>
            <a
              href="https://vercel.com/niczeta"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/niczeta
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
