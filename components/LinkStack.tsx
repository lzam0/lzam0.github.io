import { InstagramIcon, TikTokIcon, LinkedInIcon, GitHubIcon } from "./icons";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/builtbyleihl/?hl=en",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@builtbyleihl",
    Icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leihl-zambrano-97607029b/",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/lzam0",
    Icon: GitHubIcon,
  },
];

export default function LinkStack() {
  return (
    <section className="px-6 max-w-md mx-auto w-full">
      <div className="flex justify-center gap-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-14 h-14 rounded-full border border-black/10 hover:border-black hover:bg-black/[0.03] transition-all duration-200"
          >
            <Icon className="w-6 h-6 text-black" />
          </a>
        ))}
      </div>
    </section>
  );
}
