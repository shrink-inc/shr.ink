import { ReactNode } from "react";
import Image from "next/image";

export type Project = {
  name: string;
  icon: ReactNode;
  description: ReactNode;
  link: {
    label: string;
    href: string;
  };
};

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

export const projects: Project[] = [
  {
    name: "Defunct",
    icon: (
      <Image
        alt="defunct.net icon"
        src="https://defunct.net/favicon.ico"
        className="inline size-4"
        width={48}
        height={48}
      />
    ),
    description:
      "Don't leave domains unresolved. Free landing pages and email inboxes for unused domains.",
    link: { label: "defunct.net", href: "https://defunct.net" },
  },
  {
    name: "handles.net",
    icon: (
      <Image
        alt="handles.net icon"
        src="https://handles.net/favicon.ico"
        className="inline size-4"
        width={48}
        height={48}
      />
    ),
    description:
      "Manage and provision Bluesky handles for your team, community or group.",
    link: { label: "handles.net", href: "https://handles.net" },
  },
  {
    name: "Handles Club",
    icon: (
      <Image
        alt="handles.club icon"
        src="https://handles.club/favicon.ico"
        className="inline size-4"
        width={48}
        height={48}
      />
    ),
    description: (
      <>
        A free collection of more than 100 domains for personalized Bluesky
        handles, like{" "}
        <DomainPlaceholder placeholder="name" domain="on.computer" />,{" "}
        <DomainPlaceholder placeholder="name" domain="and.cat" /> and{" "}
        <DomainPlaceholder placeholder="name" domain="likes.earth" />.
      </>
    ),
    link: { label: "handles.club", href: "https://handles.club" },
  },
  {
    name: "is.now",
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
    description:
      "A GitHub Action to add many tags to an image in a Docker Registry.",
    link: {
      label: "github.com",
      href: "https://github.com/shrink/actions-docker-registry-tag",
    },
  },
  {
    name: "shrink-inc/shr.ink",
    icon: "🦑",
    description: "A little website for a little company.",
    link: {
      label: "github.com",
      href: "https://github.com/shrink-inc/shr.ink",
    },
  },
  {
    name: "prompt/avatars.dog",
    icon: "🐶",
    description: "Fetch Bluesky avatars with a single URL.",
    link: {
      label: "github.com",
      href: "https://github.com/prompt/avatars.dog",
    },
  },
];
