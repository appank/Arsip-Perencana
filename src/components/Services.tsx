import { Wallet, RefreshCcw, Target, Cpu } from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Harga Bersahabat",
    description: "Kami tawarkan layanan desain bangun yang ramah di kantong",
  },
  {
    icon: RefreshCcw,
    title: "Gratis Revisi",
    description: "Kami berikan layanan revisi desain bangunan tanpa biaya tambahan",
  },
  {
    icon: Target,
    title: "Sesuai Impian & Budget",
    description: "Desain bangunan menyesuaikan kebutuhan, keinginan, dan anggaran Anda",
  },
  {
    icon: Cpu,
    title: "Perencanaan dengan BIM",
    description: "Kami gunakan teknologi untuk hasil desain yang lebih akurat dan efisien",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa yang Kami <span className="text-primary">Tawarkan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Layanan profesional untuk mewujudkan proyek impian Anda
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-up group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
