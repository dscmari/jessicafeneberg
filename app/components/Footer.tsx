import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-marine-blue text-off-white ">
      <div className="p-8 lg:p-16 xl:p-32 grid grid-cols-1 gap-12 lg:grid-cols-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start mb-4">
            <span>Jessica Feneberg</span>
            <span>www.jessicafeneberg.de</span>
          </div>
          <span>+49 12345678</span>
          <span>muster@frau.de</span>
          <span>Kegelkopfweg 4</span>
          <span>86825 Bad Wörishofen</span>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col items-center lg:items-start gap-2">
            {/* <LinkSEOCheck className="underline" />
            <LinkGeoCheck className="underline" />
            <LinkAdsKurs className="underline" /> */}
            <Link className="underline" href={"/ueber-mich/"}>
              Über Jessica Feneberg
            </Link>
            <Link
              className="underline"
              href={"/leistungen/"}
            >
              Leistungen
            </Link>
            <Link
              className="underline"
              href={"/referenzen/"}
            >
              Referenzen
            </Link>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Link href={"/agb/"} className="underline">
              Allgemeine Geschäftsbedingungen
            </Link>
            <Link href={"/datenschutz/"} className="underline">
              Datenschutzerklärung
            </Link>
            <Link href={"/impressum/"} className="underline">
              Impressum
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0">
          <h1>
            Jessica Feneberg Footer Headline
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aliquam perspiciatis commodi reiciendis! Cumque nulla quo unde corrupti porro, vitae dolorum vero ratione non! Maiores eveniet illo ipsam quibusdam laborum.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 px-8 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Jessica Feneberg</span>
        <span>
          Design & Entwicklung von{" "}
          <a
            href="https://namaste-websites.de"
            className="hover:text-white transition-colors underline"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
