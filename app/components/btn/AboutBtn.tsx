"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  content?: string;
  hasArrow?: boolean
};

export default function AboutBtn({ className, content, hasArrow }: Props) {
  return (
    <Link
      href={"/ueber-mich/"}
      className={`max-w-72 flex justify-between  gap-2 bg-darkturquoise rounded-3xl text-white py-4 px-6 hover:shadow-xl font-semibold tracking-wide hover:bg-[#066575] ${className}`}
    >
      <span>{content ? content : "Mehr über mich erfahren"}</span>
      {hasArrow && <ArrowRight className="shrink-0"/> }
    </Link>
  );
}
