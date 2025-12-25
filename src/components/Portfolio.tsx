import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio1.jpeg";
import portfolio2 from "@/assets/portfolio2.jpeg";
import portfolio3 from "@/assets/portfolio3.jpeg";
import portfolio4 from "@/assets/portfolio4.jpeg";
import portfolio5 from "@/assets/portfolio5.jpeg";
import portfolio6 from "@/assets/portfolio6.jpeg";

const portfolioItems = [
  { id: 1, image: portfolio1, category: "bangunan" },
  { id: 2, image: portfolio2, category: "bangunan" },
  { id: 3, image: portfolio3, category: "bangunan" },
  { id: 4, image: portfolio4, category: "bangunan" },
  { id: 5, image: portfolio5, category: "bangunan" },
  { id: 6, image: portfolio6, category: "bangunan" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("bangunan");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeTab
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Project Desain yang Kami{" "}
              <span className="text-primary">Kerjakan</span>
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-up">
            <button
              onClick={() => setActiveTab("bangunan")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "bangunan"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              Desain Bangunan
            </button>
            <button
              onClick={() => setActiveTab("interior")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "interior"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              Desain Interior
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-scale-in group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {activeTab === "interior" && (
            <div className="text-center py-16 text-muted-foreground animate-fade-in">
              <p className="text-lg">Segera hadir portfolio desain interior...</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full hover:bg-black/70"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImage].image}
              alt={`Portfolio ${filteredItems[selectedImage].id}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors p-3 bg-black/50 rounded-full hover:bg-black/70"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
