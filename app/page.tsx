import Image from "next/image";
import HeroHome from "./components/hero/HeroHome";
import {
  BuildingComplex,
  ChartNoAxesCombined,
  Check,
  Gem,
  Goal,
  Quote,
  UserRoundCheck,
} from "lucide-react";
import AboutBtn from "./components/btn/AboutBtn";

export default function Home() {
  return (
    <div className="">
      <HeroHome />
      <section className="mt-24 lg:mt-0 overflow-hidden">
        <div className="bg-ice-blue/50 px-4 py-12 md:p-0">
          <article className="grid gap-4 lg:gap-0 md:grid-cols-3 md:p-4 lg:p-8 xl:p-12 max-w-7xl mx-auto">
            <div className="md:px-4 lg:px-8 relative flex flex-col lg:flex-row gap-4 items-start md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-20 md:after:w-0.5 md:after:bg-turquoise/25">
              <BuildingComplex
                className="shrink-0 text-turquoise h-8 w-8 lg:h-12 lg:w-12"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="!font-bold">Referenz A</h2>
                <p className="text-sm">Kurze Info zu Firma A & Erfolg</p>
              </div>
            </div>
            <div className="md:px-4 lg:px-8 relative flex flex-col lg:flex-row gap-4 items-start md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-20 md:after:w-0.5 md:after:bg-turquoise/25">
              <BuildingComplex
                className="shrink-0 text-turquoise h-8 w-8 lg:h-12 lg:w-12"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="!font-bold">Referenz B</h2>
                <p className="text-sm">Kurze Info zu Firma B & Erfolg</p>
              </div>
            </div>
            <div className="md:px-4 lg:px-8 relative flex flex-col lg:flex-row gap-4 items-start">
              <BuildingComplex
                className="shrink-0 text-turquoise h-8 w-8 lg:h-12 lg:w-12"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="!font-bold">Referenz C</h2>
                <p className="text-sm">Kurze Info zu Firma C & Erfolg</p>
              </div>
            </div>
          </article>
        </div>
        <div className="relative overflow-hidden flex flex-col lg:flex-row gap-24 lg:gap-8 xl:gap-0 items-center px-4 md:px-16 xl:px-32 py-12 lg:py-32">
          {/* leave */}
          <span className="absolute h-160 w-160 text-turquoise/20 rotate-45 -left-80 -z-[10]">
            <svg
              viewBox="0 0 200 400" // Definiert das Koordinatensystem
              fill="currentColor" // Nutzt die Textfarbe (turquoise/20)
              className="h-full w-full"
            >
              <path d="M 100 0 C 150 100 150 200 100 300 C 50 200 50 100 100 0 Z" />
            </svg>
          </span>
          {/* circles */}
          <span className="absolute bg-turquoise/10 h-140 w-140 rounded-full -bottom-80 -right-120 -z-[10]"></span>
          <span className="absolute bg-turquoise/30 h-160 w-160 rounded-full -bottom-148 -right-60"></span>
          <div className="pt-12 lg:pt-0 flex-1 relative">
            <div className="relative w-fit overflow-hidden rounded-3xl">
              <Image
                src={"/images/stock_office.jpg"}
                width={500}
                height={500}
                alt="Umsetzung von Performance Marketing am Laptop"
                className="rounded-3xl"
                priority
              />
              {/* circle */}
              <span className="absolute bg-turquoise/50 h-80 w-80 rounded-full -right-48 -bottom-60"></span>
            </div>
          </div>
          <article className="flex-1 pb-12 lg:py-0">
            <h3 className="!text-darkturquoise uppercase !font-semibold !tracking-wide">
              Meine Leistungen
            </h3>
            <h1>Performance Marketing mit Weitblick</h1>
            <p>
              Von der Strategie bis zur Optimierung: Ich unterstütze dich dabei,
              deine Marketingmaßnahmen gezielt, effizient und messbar
              erfolgreicher zu machen.
            </p>
            <div className="flex flex-col gap-2 pt-8">
              <div className="flex gap-4">
                <Check className="text-turquoise shrink-0" strokeWidth={2.8} />
                <span>Strategische Beratung & Sparring</span>
              </div>
              <div className="flex gap-4">
                <Check className="text-turquoise shrink-0" strokeWidth={2.8} />
                <span>
                  Planung und Steuerung von Paid-Kampagnen (z. B. Google Ads,
                  Meta, LinkedIn)
                </span>
              </div>
              <div className="flex gap-4">
                <Check className="text-turquoise shrink-0" strokeWidth={2.8} />
                <span>Datenanalyse, Tracking & Optimierung</span>
              </div>
              <div className="flex gap-4">
                <Check className="text-turquoise shrink-0" strokeWidth={2.8} />
                <span>Wachstumsbegleitung & skalierbare Setups</span>
              </div>
            </div>
          </article>
        </div>
        <div className="bg-marine-blue py-12 lg:py-0">
          <article className="grid gap-8 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 text-off-white p-8 xl:p-12 max-w-7xl mx-auto">
            <div className="text-center px-8 relative flex flex-col gap-2 items-center lg:after:content-[''] lg:after:absolute lg:after:right-0 after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-20 lg:after:w-0.5 lg:after:bg-off-white/50">
              <Goal className="shrink-0" size={32} />
              <h2 className="!mb-0 !leading-none">+100</h2>
              <p className="text-sm/3">betreute Projekte</p>
            </div>
            <div className="text-center px-8 relative flex flex-col gap-2 items-center lg:after:content-[''] lg:after:absolute lg:after:right-0 after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-20 lg:after:w-0.5 lg:after:bg-off-white/50">
              <UserRoundCheck className="shrink-0" size={32} />
              <h2 className="!mb-0 !leading-none">10+ Jahre</h2>
              <p className="text-sm/3">Erfahrung im Performance Marketing</p>
            </div>
            <div className="text-center px-8 relative flex flex-col gap-2 items-center lg:after:content-[''] lg:after:absolute lg:after:right-0 after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-20 lg:after:w-0.5 lg:after:bg-off-white/50">
              <ChartNoAxesCombined className="shrink-0" size={32} />
              <h2 className="!mb-0 !text-xl !leading-none">
                nachhaltiges Wachstum
              </h2>
              <p className="text-sm/3">für meine Kund:innen</p>
            </div>
            <div className="px-8 flex flex-col gap-2 items-center text-center">
              <Gem className="shrink-0" size={32} />
              <h2 className="!mb-0 !text-xl !leading-none text-center">
                persöhnlich & auf Augenhöhe
              </h2>
              <p className="text-sm/3">Beratung statt Agentur-Flair</p>
            </div>
          </article>
        </div>
      </section>
       <section className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-16 px-4 md:px-8 lg:px-32 py-24 lg:py-32 relative overflow-hidden">
       
                   {/* circles */}
          <span className="absolute bg-turquoise/10 h-140 w-140 rounded-full -bottom-80 -right-100 -z-[10]"></span>
          <span className="absolute bg-turquoise/30 h-160 w-160 rounded-full -bottom-140 -right-60"></span>
          <article className="pb-12 lg:py-0 flex flex-col gap-4">
            <h3 className="!text-darkturquoise uppercase !font-semibold !tracking-wide">
              ÜBER MICH
            </h3>
            <h1 className="max-w-lg">
              Marketing-Expertise mit persönlichem Ansatz
            </h1>
            <p className="max-w-xl">
              Ich bin Jessica Feneberg - Performance Marketing Consultant mit
              Leidenschaft für messbare Ergebnisse, smarte Strategien und
              partnerschaftliche Zusammenarbeit.
            </p>
            <AboutBtn hasArrow={true} className="mt-8" />
          </article>
          <div className="">
            <div className="relative bg-ice-blue rounded-3xl p-8 lg:p-16 max-w-lg">
              <Quote
                className="absolute top-4 left-4  lg:top-8 lg:left-8 text-darkturquoise fill-darkturquoise w-4 h-4 lg:w-8 lg:h-8"
                strokeWidth={0.1}
              />

              <p className="text-lg italic">
                „Mein Ziel: Marketing, das nicht nur gut aussieht, sondern
                spürbar zum Wachstum beiträgt."
              </p>
              <p className="text-3xl font-signature text-end pt-4">
                Jessica Feneberg
              </p>
            </div>
          </div>
    
      </section>
    </div>
  );
}
