import character2 from "@/assets/character2.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-up">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tentang <span className="text-primary">Arsip Perencana</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Arsip Perencana</span> adalah studio arsitektur yang berfokus pada perencanaan dan pengembangan proyek dengan pendekatan teknologi{" "}
                  <span className="text-primary font-semibold">Building Information Modeling (BIM)</span>.
                </p>
                <p>
                  Dengan BIM, setiap proyek yang kami kerjakan memiliki tingkat akurasi yang tinggi dalam perencanaan, visualisasi, hingga detail teknis yang dibutuhkan untuk pelaksanaan proyek.
                </p>
                <p>
                  Teknologi ini memungkinkan proses desain menjadi lebih{" "}
                  <span className="font-semibold text-foreground">efisien, terintegrasi, dan minim kesalahan</span> sejak tahap awal.
                </p>
              </div>
            </div>

            {/* Right Content - Services List */}
            <div className="animate-fade-up delay-200">
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Layanan Dokumen Teknis
                </h3>
                <p className="text-muted-foreground mb-6">
                  Kami menyediakan layanan penyusunan dokumen teknis lengkap untuk keperluan proyek pemerintahan maupun non-pemerintahan:
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Detail Engineering Design (DED)", desc: "Gambar kerja lengkap dan detail" },
                    { title: "Rencana Anggaran Biaya (RAB)", desc: "Estimasi biaya proyek yang akurat" },
                    { title: "Spesifikasi Teknis", desc: "Dokumen teknis sesuai standar" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Character Image */}
          <div className="mt-12 -mb-10  flex justify-center animate-fade-up">
            <img 
              src={character2} 
              alt="Arsip Perencana Character" 
              className="w-64 h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
