/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BarChart4,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import CompanySelect from "../component/custom/companySelectForm";

const Home = () => {
  return (
    <div>

      <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden">
        <Link
          href="/new"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-orange-500 to-pink-400 text-white hover:bg-black/90 px-6 py-2 text-lg"
        >
          Generate Invoice
        </Link>
      </div>
      <div>
        <CompanySelect />
      </div>

      <div className="m-3">
        <h2 className="pb-2">Cjenik:</h2>
        <div className="p-1">Instrukcije za izradu web stranice HTML, CSS, Javascript: 40€</div>
        <div className="p-1">Instrukcije iz programskog Jezika Java - Osnove javaprogramiranja 30€</div>
        <div className="p-1">Konfiguracija aplikacijskog servera za produkciju: 70€</div>
        <div className="p-1">Inicijalna konfiguracija računala: 5€</div>
        <div className="p-1">Instrukcije iz programskog jezika Python: 50€</div>
      </div>
    </div>
  );
};

export default Home;
