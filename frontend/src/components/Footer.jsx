import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Social + Newsletter */}
        <div className="space-y-4 col-span-2">
          <div className="text-2xl font-bold">LFT</div>
          <div className="flex gap-4 text-sm">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Pinterest</a>
          </div>
          <div>
            <p className="mb-2">Wir halten dich auf dem laufenden</p>
            <div className="flex items-center border-b border-white max-w-xs">
              <input
                type="email"
                placeholder="Deine E-Mail Adresse"
                className="bg-transparent placeholder-white text-white py-1 w-full outline-none"
              />
              <span className="ml-2 cursor-pointer">➝</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold">Quick links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">So geht's</a>
            </li>
            <li>
              <a href="#">Erfahrung</a>
            </li>
            <li>
              <a href="#">Allgemein</a>
            </li>
            <li>
              <a href="#">Preise</a>
            </li>
            <li>
              <a href="#">Standorte</a>
            </li>
          </ul>
        </div>

        {/* News */}
        <div className="space-y-2">
          <h4 className="font-semibold">News</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">LFT Media</a>
            </li>
            <li>
              <a href="#">Offene Stellen</a>
            </li>
            <li>
              <a href="#">Presse LFT</a>
            </li>
          </ul>
        </div>

        {/* Treatment */}
        <div className="space-y-2">
          <h4 className="font-semibold">Behandlung</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Gratis Termin</a>
            </li>
            <li>
              <a href="#">Freunde einladen</a>
            </li>
            <li>
              <a href="#">Patienteninformationen</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom links */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-t border-white pt-4">
        <p>© 2023 LFT Media. All rights reserved</p>
        <div className="flex gap-4">
          <a href="#">Datenschutz</a>
          <a href="#">Impressum</a>
          <a href="#">Cookie Policy</a>
          <a href="#">AGBs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
