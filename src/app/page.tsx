import { PropsWithChildren } from "react";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";
import SquidLogo from "./squid.svg";
import EmailButton from "./email-button";
import clsx from "clsx";
import { Project, projects } from "./projects";

function CardTarget({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "absolute -inset-x-4 -inset-y-6 sm:rounded-2xl",
        className,
      )}
    />
  );
}

function CardBody({ children }: PropsWithChildren) {
  return (
    <div className="group relative flex h-full flex-col items-start gap-y-2">
      {children}
    </div>
  );
}

function ProjectCard({ name, description, link, icon }: Project) {
  return (
    <CardBody>
      <CardTarget className="z-0 scale-95 bg-pink-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 dark:bg-zinc-800/50" />

      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <a href={link.href}>
          <CardTarget className="z-20 cursor-pointer" />
          <span className="relative flex items-center gap-x-1">
            {icon} {name}
          </span>
        </a>
      </h2>

      <p className="relative grow text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="relative flex content-center content-start items-center space-x-2 text-sm font-medium text-zinc-400 transition group-hover:text-pink-600 dark:text-zinc-200 dark:group-hover:text-pink-400">
        <LinkIcon className="size-3.5" />
        <span>{link.label}</span>
      </div>
    </CardBody>
  );
}

function CompanyCard() {
  return (
    <div className="relative flex h-full flex-row gap-x-6">
      <Image
        src={SquidLogo}
        priority={true}
        className="z-50 w-24"
        alt="Shrink Inc. squid logo"
      />
      <CardBody>
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <span className="absolute -inset-x-4 -inset-y-6 z-0 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">Shrink Inc.</span>
        </h2>

        <p className="relative z-10 grow text-sm text-zinc-600 dark:text-zinc-400">
          websites, widgets and whatever for the www.
        </p>
        <div className="w-full text-sm">
          <EmailButton address="hello@shr.ink" />
        </div>
      </CardBody>
    </div>
  );
}

export default function Home() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 p-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <li>
        <CompanyCard />
      </li>
      {projects.map((project) => (
        <li key={project.link.href}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
