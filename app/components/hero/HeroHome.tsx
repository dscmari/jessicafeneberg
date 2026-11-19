import Image from "next/image";
import ContactBtn from "../btn/ContactBtn";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import { ChartNoAxesCombined, Goal, Rocket } from "lucide-react";

type Props = {
  title?: React.ReactNode;
  subtitle?: string;
  text?: string;
};

export default function HeroHome({ title, subtitle, text }: Props) {
  return (
    <div>
      <div className="lg:hidden relative">
        {/* <div>
          <Image
            src={"/#/"}
            width={500}
            height={500}
            alt="Portrait von Jessica Feneberg"
            className="w-full h-auto min-h-[300px]"
            priority
            sizes="100vw bg-red-500 "
          />
        </div>
        <h1 className="!text-3xl p-4 text-center">Performance Marketing.Strategisch gedacht. Persönlich umgesetzt.</h1> */}
        <p>//TODO</p>
        <p>mobile</p>
      </div>
      <div
        className="hidden lg:flex flex-col min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(#)` }}
      >
        <Navbar className="" />
        {/* circles */}
        <span className="absolute bg-turquoise/20 h-80 w-80 rounded-full -top-36 -left-52"></span>
        <span className="absolute bg-turquoise/20 h-160 w-160 rounded-full -bottom-144 -left-40 "></span>
        <span className="absolute bg-turquoise/10 h-140 w-140 rounded-full -bottom-100 -right-76 "></span>
        <span className="absolute bg-turquoise/20 h-160 w-160 rounded-full -bottom-144 -right-76 "></span>
        <div className="flex h-full flex-1">
          <div className="max-w-1/2 flex-1 flex flex-col justify-center items-end">
            <article>
              <h3 className="!text-darkturquoise uppercase !font-semibold !tracking-wide">
                Performance Marketing Consulting
              </h3>
              <h1 className="mb-8 lg:!text-3xl/10 xl:!text-4xl/12 2xl:!text-5xl/14 !font-extrabold !tracking-normal">
                Performance Marketing. <br /> Strategisch gedacht. <br />{" "}
                Persönlich umgesetzt.
              </h1>

              <p className="mb-8 max-w-md">
                Individuelle Beratung, datenbasierte Entscheidungen und
                wirkungsvolle Kampagnen für messbares und nachhaltiges Wachstum.
              </p>
              <div className="flex items-center gap-8">
                <ContactBtn />
                <Link
                  className="underline underline-offset-12 decoration-2 decoration-turquoise/50"
                  href={"/ueber-mich"}
                >
                  Mehr über mich
                </Link>
              </div>
            </article>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-8">
              <article className="border-b-3 border-turquoise/50 pb-4 xl:pb-8">
                <ChartNoAxesCombined
                  className="text-turquoise shrink-0"
                  size={52}
                />
                <h2 className="pt-2 !mb-0">Strategie & Beratung</h2>
                <p>Die richtigen Hebel für deine Ziele</p>
              </article>
              <article className="border-b-3 border-turquoise/50 pb-4 xl:pb-8">
                <Goal className="text-turquoise shrink-0" size={52} />
                <h2 className="pt-2 !mb-0">Kampagnen-Management</h2>
                <p>Effizient, datenbasiert und skalierbar</p>
              </article>
              <article className="border-b-3 border-turquoise/50 pb-4 xl:pb-8">
                <Rocket className="text-turquoise shrink-0" size={52} />
                <h2 className="pt-2 !mb-0">Performance-Optimierung</h2>
                <p>Mehr Wirkung aus deinem Marketing-Budget</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
