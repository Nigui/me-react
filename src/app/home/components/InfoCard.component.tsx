import { GlassCard } from "@/app/components/GlassCard.component";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { TwitterIcon } from "@/app/components/icons/TwitterIcon.component";
import { GithubIcon } from "@/app/components/icons/GithubIcon.component";

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
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full w-24 h-24"
            src="https://avatars.githubusercontent.com/u/6088236?v=4"
            alt="profile picture"
            width={100}
            height={100}
            blurDataURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5b5r6d4_MkqIN34qGHgzNAt6ClekghnR-IF-8ujLUdciRTCp5Tk5zuhFLKiY_iOh5boQ&usqp=CAU"
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
