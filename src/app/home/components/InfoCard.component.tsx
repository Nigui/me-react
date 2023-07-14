import { GlassCard } from "@/app/components/GlassCard.component";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { TwitterIcon } from "@/app/components/icons/TwitterIcon.component";
import { GithubIcon } from "@/app/components/icons/GithubIcon.component";
import profilePic from "@/app/assets/pp.jpg";

export default function InfoCard() {
  const links = [
    {
      Icon: EnvelopeIcon,
      label: "contact@nigui.fr",
    },
    {
      Icon: TwitterIcon,
      label: "GuillaumeN",
    },
    {
      Icon: GithubIcon,
      label: "Nigui",
    },
  ];
  return (
    <GlassCard>
      <div className="flex flex-col gap-3 text-white">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full w-24 h-24"
            src={profilePic}
            alt="profile picture"
          />
          <div className="text-center">
            <div className="font-bold text-3xl">Guillaume Nicolas</div>
            <div className="text-xl">Senior full-stack web developer</div>
            <div>📍Nantes, FRANCE and remotely available</div>
          </div>
        </div>
        <ul className="flex gap-5 justify-center opacity-70">
          {links.map(({ Icon, label }, index) => {
            return (
              <li className="flex gap-1" key={`link-${index}`}>
                <div className="rounded-full border border-current flex items-center justify-center w-6">
                  <Icon className="w-3" />
                </div>
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </GlassCard>
  );
}
