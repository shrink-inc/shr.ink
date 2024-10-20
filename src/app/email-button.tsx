"use client";

import { useState } from "react";
import copy from "copy-to-clipboard";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function EmailButton({
  address,
}: {
  address: `${string}@${string}`;
}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [local, domain] = address.split("@");

  const copyToClipboard = () => {
    setIsCopied(true);
    copy(address, { format: "text/plain" });
    setTimeout(() => setIsCopied(false), 500);
  };

  return (
    <div className="relative">
      <span
        data-copied={isCopied}
        className="invisible absolute text-zinc-600 transition-all duration-500 ease-out data-[copied=true]:visible data-[copied=true]:-translate-y-6 data-[copied=true]:opacity-0 data-[copied=false]:transition-none dark:text-zinc-200"
      >
        copied to clipboard
      </span>
      <button
        className="flex w-fit items-center gap-x-1 text-zinc-600 hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-400"
        onClick={copyToClipboard}
      >
        <EnvelopeIcon className="size-4" />
        <span>
          {local}@<span className="font-bold">{domain}</span>
        </span>
      </button>
    </div>
  );
}
