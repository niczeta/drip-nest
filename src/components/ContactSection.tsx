import { Mail, Phone, MapPin, Clock, Linkedin, Github, Triangle } from "lucide-react";

// Contact section showing various contact methods and links
export const ContactSection = () => (
  // Section with dark background and padding
  <section
    id="contact"
    className="bg-neutral-950 text-white px-6 py-20 md:py-28"
  >
    <div className="md:max-w-6xl mx-14 md:mx-auto text-center md:px-0">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-28">Hire me</h2>

      {/* Responsive grid: stacks on mobile, 2 columns on small screens, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-24 text-left text-base">
        {/* Email contact block */}
        <div className="flex items-start gap-4">
          <Mail className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">E-mail</h3>
            <p className="text-neutral-400">nicolemisuraca@outlook.it</p>
          </div>
        </div>
        {/* Phone contact block */}
        <div className="flex items-start gap-4">
          <Phone className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-neutral-400">+39 334 391 5430</p>
          </div>
        </div>
        {/* Location info */}
        <div className="flex items-start gap-4">
          <MapPin className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-neutral-400">Rome, Italy</p>
          </div>
        </div>
        {/* Availability */}
        <div className="flex items-start gap-4">
          <Clock className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Hours</h3>
            <p className="text-neutral-400">24/7 – Always available</p>
          </div>
        </div>
        {/* LinkedIn profile */}
        <div className="flex items-start gap-4">
          <Linkedin className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nicolemisuraca/"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nicole on LinkedIn" // Accessibility improvement
            >
              Nicole Misuraca
            </a>
          </div>
        </div>
        {/* GitHub profile */}
        <div className="flex items-start gap-4">
          <Github className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">GitHub</h3>
            <a
              href="https://github.com/niczeta"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nicole on GitHub"
            >
              github.com/niczeta
            </a>
          </div>
        </div>
        {/* Vercel profile */}
        <div className="flex items-start gap-4">
          <Triangle className="text-red-600 mt-1 w-5 min-w-[20px]" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Vercel</h3>
            <a
              href="https://vercel.com/niczetas-projects"
              className="text-neutral-400 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nicole on Vercel"
            >
              vercel.com/niczetas-projects
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
