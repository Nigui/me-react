"use client";

import Image from "next/image";
import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { TwitterIcon } from "@/app/components/icons/TwitterIcon.component";
import { GithubIcon } from "@/app/components/icons/GithubIcon.component";
import profilePic from "@/app/assets/pp.jpg";
import { CardButton, CardButtonProps } from "./CardButton.component";

export default function InfoCard() {
  const actions: CardButtonProps[] = [
    {
      icon: <TwitterIcon />,
      label: "GuillaumeN",
      href: "https://twitter.com/GuiillaumeN",
    },
    {
      icon: <GithubIcon />,
      label: "Nigui",
      href: "https://github.com/Nigui",
    },
    {
      icon: <DocumentArrowDownIcon />,
      label: "Resume",
      href: "/resume-2.0.0.pdf",
    },
    {
      icon: <EnvelopeIcon />,
      label: "contact me",
      onClick: () => {
        alert("contact me");
      },
    },
  ];
  return (
    <div className=" relative w-full sm:max-w-3xl sm:min-w-fit">
      <div className="absolute inset-x-0 -top-20 md:inset-y-0 md:-left-20 flex justify-center md:justify-start md:items-center ">
        <div className="bg-secondary rounded-full w-44 h-44" />
      </div>
      <div className="bg-gradient-to-b md:bg-gradient-to-r from-lighter-40 text-lighter p-10 pt-28 md:p-10  rounded-xl bg-opacity-70 backdrop-filter backdrop-blur-md border-2 border-lighter-40">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold text-5xl">Guillaume NICOLAS</h1>
            <div className="font-medium text-3xl">
              Senior full-stack web developer
            </div>
            <div className="font-light text-xl">
              📍Nantes, FRANCE and remotely available
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {actions.map((props, index) => {
              return (
                <li key={`action-${index}`}>
                  <CardButton {...props} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-16 md:inset-y-0 md:-left-16 flex justify-center md:justify-start md:items-center pointer-events-none">
        <Image
          className="rounded-full w-36 h-36"
          src={profilePic}
          alt="profile picture"
        />
      </div>
    </div>
  );
}
