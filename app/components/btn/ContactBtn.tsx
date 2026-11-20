"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  content?: string;
};

export default function ContactBtn({ className, content }: Props) {
  return (
    <Link
      href={"/kontakt/"}
      className={`max-w-72 flex justify-center gap-2 bg-darkturquoise rounded-3xl text-white py-4 px-6 hover:shadow-xl font-semibold tracking-wide hover:bg-[#066575] ${className}`}
    >
      <span>{content ? content : "Erstgespräch vereinbaren"}</span>
      {/* <ArrowRight className="shrink-0"/> */}
    </Link>
  );
}
