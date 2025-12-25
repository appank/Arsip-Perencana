import logo from "@/assets/arsib_logo.png";
import heroHouse from "@/assets/portfolio.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
              {/* Logo Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start mb-4">
                <img
                  src={logo}
                  alt="Arsip Perencana"
                  className="h-24 md:h-40 w-auto animate-float"
                />
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                Butuh{" "}
                <span className="text-primary">Jasa Arsitek</span>
                {" "}?
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Dari ide hingga gambar kerja, kami bantu Anda melangkah pasti. 
                Yuk, mulai proyekmu bareng{" "}
                <span className="text-primary font-semibold">Arsip Perencana</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20konsultasi%20proyek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-dark transition-all duration-300 shadow-glow hover:shadow-xl hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Sekarang
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative animate-fade-up delay-200">
            <div className="relative">
              {/* Main Image */}
              <img
                src={heroHouse}
                alt="Modern House Design"
                className="w-full h-auto rounded-3xl shadow-card"
              />
              
              {/* Floating Stats Card */}
              {/* <div className="absolute -bottom-6 -left-6 md:left-6 bg-card p-4 md:p-6 rounded-2xl shadow-card animate-bounce-soft">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground">Proyek Selesai</p>
                  </div>
                </div>
              </div> */}

              {/* Floating BIM Badge */}
              <div className="absolute -top-4 -right-4 md:right-6 bg-primary text-accent-foreground px-4 py-2 rounded-xl shadow-card">
                <p className="text-sm font-bold">✨ Teknologi BIM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
