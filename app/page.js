'use client'; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SkripsiOnline() {
  const [activeSection, setActiveSection] = useState("Bab 1");
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [
    { title: "Bab 1 - Pendahuluan", id: "bab-1" },
    { title: "Bab 2 - Kajian Pustaka", id: "bab-2" },
    { title: "Bab 3 - Metodologi Penelitian", id: "bab-3" },
    { title: "Bab 4 - Pembahasan", id: "bab-4" },
    { title: "Bab 5 - Penutup", id: "bab-5" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "Bab 1 - Pendahuluan";
      
      sections.forEach(({ title, id }) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop - 100 <= scrollPosition) {
          currentSection = title;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-lg z-20 flex justify-between items-center px-6">
        <div className="text-base font-bold whitespace-nowrap mt-1">IMPLEMENTASI AI PADA PERUSAHAAN</div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <ul className={`md:flex space-x-4 ${menuOpen ? "block absolute top-16 left-0 w-full bg-indigo-600 p-4 shadow-lg z-30" : "hidden md:flex"}`}>
          {sections.map(({ title, id }) => (
            <li key={id} className="text-center md:text-left py-2 md:py-0">
              <a href={`#${id}`} className="text-white hover:text-gray-300 transition-colors" onClick={() => setMenuOpen(false)}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 0 : 1 }} 
        transition={{ duration: 0.3 }}
        className={`sticky top-[56px] bg-white p-3 shadow-lg z-20 text-center font-semibold text-lg border-b border-gray-300 rounded-lg mx-4 mt-2 text-indigo-700 ${menuOpen ? "hidden" : "block"}`}
      >
        {activeSection}
      </motion.div>

      <div className="mt-24 p-6 space-y-16">
        {sections.map(({ title, id }, index) => (
          <motion.div 
            id={id} 
            key={id} 
            className="mb-16 bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-500 pb-2 mb-4">{title}</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              {id === "bab-1" && "Bab ini membahas latar belakang permasalahan, urgensi penelitian, serta bagaimana AI dapat memberikan solusi dalam pengambilan keputusan. Selain itu, akan dijelaskan ruang lingkup penelitian serta tujuan utama yang ingin dicapai."}
              {id === "bab-2" && "Bab ini mengulas teori-teori dasar AI, model pembelajaran mesin yang digunakan dalam pengambilan keputusan, serta studi literatur terkait yang memberikan gambaran tentang implementasi AI di dunia nyata. Perbandingan beberapa pendekatan juga dibahas untuk memberikan pemahaman yang lebih mendalam."}
              {id === "bab-3" && "Bab ini menjelaskan langkah-langkah metodologi penelitian, mulai dari pengumpulan data, pemilihan algoritma AI, proses pelatihan model, serta evaluasi performa sistem yang dikembangkan. Teknik validasi serta metrik evaluasi seperti akurasi dan presisi juga dijelaskan secara rinci."}
              {id === "bab-4" && "Bagian ini menyajikan hasil eksperimen, analisis data, dan perbandingan model yang digunakan. Selain itu, terdapat pembahasan mengenai kelebihan dan kekurangan implementasi AI dalam pengambilan keputusan berdasarkan data eksperimen yang telah dikumpulkan."}
              {id === "bab-5" && "Bab terakhir menyimpulkan hasil penelitian serta memberikan rekomendasi untuk penelitian selanjutnya. Diharapkan bahwa penelitian ini dapat menjadi dasar bagi pengembangan AI lebih lanjut dalam berbagai bidang yang membutuhkan pengambilan keputusan yang optimal. Selain itu, penelitian ini juga memberikan wawasan tentang bagaimana AI dapat ditingkatkan dalam hal interpretabilitas, efisiensi komputasi, serta penerapan yang lebih luas di sektor industri, kesehatan, dan pemerintahan. Dengan semakin berkembangnya teknologi AI, diharapkan akan muncul inovasi baru yang mampu menyempurnakan sistem pengambilan keputusan yang lebih cerdas dan adaptif."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
