import { MessageCircleQuestion, Lightbulb, Ruler, FileText, HelpCircle } from "lucide-react";
import character1 from "@/assets/character1.png";

const problems = [
  {
    icon: Lightbulb,
    text: "Ide banyak, tapi bingung menyatukannya jadi desain utuh?",
  },
  {
    icon: HelpCircle,
    text: "Ingin rumah yang nyaman dan fungsional, tapi tetap estetik?",
  },
  {
    icon: MessageCircleQuestion,
    text: "Sulit menemukan arsitek yang bisa diajak diskusi dengan tenang?",
  },
  {
    icon: Ruler,
    text: "Tak ingin proses desain terasa ribet dan memusingkan?",
  },
  {
    icon: FileText,
    text: "Ingin dokumen DED, RAB, dan spesifikasi teknis tersusun rapi?",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ingin Bangun Rumah, Tapi Masih{" "}
              <span className="text-primary">Ragu Mulai dari Mana?</span>
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="animate-fade-up flex items-start gap-4 bg-card p-5 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-x-2 border-l-4 border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/90 text-lg">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Character Image */}
          <div className="mt-12 flex justify-center animate-fade-up">
            <img 
              src={character1} 
              alt="Arsip Perencana Character" 
              className="w-64 h-auto object-contain"
            />
          </div>

          {/* Solution Text */}
          <div className="mt-8 text-center animate-fade-up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Kalau iya, <span className="text-primary font-semibold">Arsip Perencana</span> siap bantu wujudkan proyek yang anda rencanakan dengan proses yang{" "}
              <span className="font-semibold text-foreground">rapi, jelas, dan sesuai kebutuhan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
