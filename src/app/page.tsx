import { PropsWithChildren, ReactNode } from "react";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";
import SquidLogo from "./squid.svg";
import EmailButton from "./email-button";
import clsx from "clsx";

type Link = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  icon: string;
  description: ReactNode;
  link: Link;
};

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
          <span className="relative">
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
      <Image src={SquidLogo} className="z-50 w-24" alt="Shrink Inc logo" />
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

function DomainPlaceholder({
  placeholder,
  domain,
}: {
  placeholder: string;
  domain: string;
}) {
  return (
    <span className="font-mono">
      <span className="underline underline-offset-2">{placeholder}</span>.
      {domain}
    </span>
  );
}

export default function Home() {
  const projects: Project[] = [
    {
      name: "Defunct",
      icon: "🪦",
      description:
        "Don't leave domains unresolved. Free landing pages and email inboxes for unused domains.",
      link: { label: "defunct.net", href: "https://defunct.net" },
    },
    {
      name: "now!",
      icon: "🗓️",
      description: (
        <>
          Domains for your now page. A nice{" "}
          <DomainPlaceholder placeholder="name" domain="is.now" />, or a fancy
          exclusive <DomainPlaceholder placeholder="name" domain="now" />.
        </>
      ),
      link: { label: "is.now", href: "https://is.now" },
    },
    {
      name: "prompt/actions-assert",
      icon: "🚦",
      description:
        "A GitHub Action for asserting actual is expected in GitHub Workflows — designed for GitHub Action integration tests and robust build pipelines.",
      link: {
        label: "github.com",
        href: "https://github.com/prompt/actions-assert",
      },
    },
    {
      name: "prompt/actions-commit-hash",
      icon: "🏷️",
      description:
        "A GitHub Action to output commit hash (short and long) with an optional prefix in a Workflow.",
      link: {
        label: "github.com",
        href: "https://github.com/prompt/actions-commit-hash",
      },
    },
    {
      name: "shrink/actions-docker-extract",
      icon: "🗃️",
      description:
        "A GitHub Action for extracting file(s) from Docker Image(s) in Workflows.",
      link: {
        label: "github.com",
        href: "https://github.com/shrink/actions-docker-extract",
      },
    },
    {
      name: "prompt/actions-semver-aliases",
      icon: "👯",
      description:
        "A GitHub Action to generate major and minor Semantic Version aliases from a Semantic Version.",
      link: {
        label: "github.com",
        href: "https://github.com/prompt/actions-semver-aliases",
      },
    },
    {
      name: "shrink/actions-docker-registry-tag",
      icon: "🐳",
      description: "Add many tags to an image in a Docker Registry.",
      link: {
        label: "github.com",
        href: "https://github.com/shrink/actions-docker-registry-tag",
      },
    },
    {
      name: "shrink-inc/shr.ink",
      icon: "🦑",
      description: "A little website for a little compny.",
      link: {
        label: "github.com",
        href: "https://github.com/shrink-inc/shr.ink",
      },
    },
  ];

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 p-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <li>
        <CompanyCard />
      </li>
      {projects.map((project) => (
        <li key={project.link.href} className="grow">
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
