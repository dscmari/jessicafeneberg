import Image from "next/image";
import ContactBtn from "../btn/ContactBtn";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

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
        className="hidden lg:flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(#)` }}
      >
        <Navbar />
        <div className="max-w-1/2 flex-1 flex flex-col justify-center items-end">
          <div>
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
                className="underline underline-offset-12 decoration-2 decoration-turquoise"
                href={"/ueber-mich"}
              >
                Mehr über mich
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
