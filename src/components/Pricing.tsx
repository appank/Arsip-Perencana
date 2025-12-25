import { useState } from "react";
import { Check, Package, Download, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import basicDED from "@/assets/sampelbanguna/DED - (Basic).pdf";
import standardDED from "@/assets/sampelbanguna/DED - (Standar).pdf";
import premiumDED from "@/assets/sampelbanguna/DED - (Premium).pdf";
import premiumRAB from "@/assets/sampelbanguna/RAB - (Premium).pdf";

const sampleFiles = {
  basic: [
    { name: "DED (Gambar Kerja) - Basic", file: basicDED, type: "PDF" },
  ],
  standar: [
    { name: "DED (Gambar Kerja) - Standar", file: standardDED, type: "PDF" },
    { name: "BIM X (3D Jelajah) - Standar", file: "", type: "BIMX" },
  ],
  premium: [
    { name: "DED (Gambar Kerja) - Premium", file: premiumDED, type: "PDF" },
    { name: "BIM X (3D Jelajah) - Premium", file: "", type: "BIMX" },
    { name: "RAB (Rencana Anggaran Biaya) - Premium", file: premiumRAB, type: "PDF" },
  ],
};

const packageNotes = {
  basic: [
    "Dokumen DED dapat dibuka menggunakan aplikasi pembaca PDF pada umumnya.",
  ],
  standar: [
    "Dokumen DED dapat dibuka menggunakan aplikasi pembaca PDF pada umumnya.",
    "Dokumen BIMx dapat dibuka menggunakan aplikasi BIMx, yang tersedia untuk diunduh melalui App Store.",
  ],
  premium: [
    "Dokumen DED dan RAB dapat dibuka menggunakan aplikasi pembaca PDF pada umumnya.",
    "Dokumen BIMx dapat dibuka menggunakan aplikasi BIMx, yang tersedia untuk diunduh melalui App Store.",
  ],
};

const packages = [
  {
    name: "PAKET BASIC",
    price: "25.000",
    originalPrice: "50.000",
    discount: "50%",
    features: [
      "Visualisai 3D Eksterior (Render)",
      "Denah Perencanaan",
      "Tampak bangunan (Depan, belakang, samping kanan & kiri)",
      "Potongan (melintang & memanjang)",
    ],
    popular: false,
    whatsappLink: "https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20PAKET%20BASIC",
  },
  {
    name: "PAKET PREMIUM",
    price: "50.000",
  
    originalPrice: "100.000",
    discount: "50%",
    features: [
      "Visualisai 3D Eksterior (Render)",
      "3D Jelajah Bangunan (BIM)",
      "Denah Perencanaan",
      "Tampak banguan (Depan, belakang, samping kanan & kiri)",
      "Potongan (melintang & memanjang)",
      "Rencana Pola Lantai",
      "Rencana Plafon + Rangka Plafond",
      "Rencana Peletakan Kusen",
      "Detail-detail (Terkait Arsitektur)",
      "Rencana Pondasi",
      "Rencana Kolom & Pembalokan",
      "Gambar Detail Struktur",
      "RAB (Rencana Anggaran Biaya)",

    ],
    popular: true,
    whatsappLink: "https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20PAKET%20STANDAR",
  },
  {
 
    name: "PAKET STANDAR",
    price: "35.000",
    originalPrice: "70.000",
    discount: "50%",
    features: [
      "Visualisai 3D Eksterior (Render)",
      "3D Jelajah Bangunan (BIM)",
      "Denah Perencanaan",
      "Tampak banguan (Depan, belakang, samping kanan & kiri)",
      "Potongan (melintang & memanjang)",
      "Rencana Pola Lantai",
      "Rencana Plafon + Rangka Plafond",
      "Rencana Peletakan Kusen",
      "Detail-detail (Terkait Arsitektur)",
      
    ],
    popular: false,
    whatsappLink: "https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20PAKET%20PREMIUM",
  },
];

const Pricing = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"basic" | "standar" | "premium" | null>(null);

  const openDialog = (packageType: "basic" | "standar" | "premium") => {
    setSelectedPackage(packageType);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedPackage(null);
  };

  const handleDownload = (fileUrl: string, fileName: string) => {
    // For BIM X Premium, open a new page with the download link
    if (fileName.includes("BIM X (3D Jelajah) - Premium")) {
      window.open("https://drive.usercontent.google.com/download?id=1KwsMT_MnQIcM-8To8Y9YuXw-ozXU5obI&export=download&authuser=0", "_blank");
    } else if (fileName.includes("BIM X (3D Jelajah) - Standar")) {
      window.open("https://drive.usercontent.google.com/download?id=1M--BrQy6b92q_1wvibqKY4U40K5y289Q&export=download&authuser=0", "_blank");
    } else {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <section id="paket" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Paket Harga
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pilih Paket Desain Bangunan{" "}
              <span className="text-primary">Sesuai Kebutuhan</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`animate-fade-up relative bg-card rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col ${
                  pkg.popular ? "border-2 border-primary ring-2 ring-primary/20" : "border border-border"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-xl">
                    Terlaris
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Package Name */}
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">
                        Rp. {pkg.price}
                      </span>
                      <span className="text-muted-foreground">/M²</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-muted-foreground line-through text-sm">
                        Rp.{pkg.originalPrice}
                      </span>
                      <span className="bg-destructive/10 text-destructive px-2 py-0.5 rounded text-xs font-semibold">
                        Diskon {pkg.discount}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="space-y-3 mt-auto">
                    <a
                      href={pkg.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:bg-teal-dark shadow-glow"
                          : "bg-primary text-primary-foreground hover:bg-teal-dark shadow-glow"
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Pesan {pkg.name.split(" ")[1]}
                    </a>
                    <button 
                      onClick={() => openDialog(pkg.name.split(" ")[1].toLowerCase() as "basic" | "standar" | "premium")}
                      className="block w-full text-center py-3 rounded-xl font-semibold border border-border text-foreground hover:bg-muted transition-colors"
                    >
                      📦 Contoh Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center animate-fade-up">
            <p className="text-muted-foreground text-sm">
              *Paket ini merupakan penawaran untuk pekerjaan rumah tinggal. Jika anda memiliki kebutuhan di luar paket Atau ingin mengajukan penawaran harga sendiri, jangan ragu untuk menghubungi kami. kami terbuka untuk berdiskusi dan menyelesaikan layanan sesuai kebutuhan anda.
            </p>
          </div>
        </div>
      </div>

      {/* Dialog Contoh Produk */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Contoh Produk - Paket {selectedPackage?.toUpperCase()}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            {/* Table */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Type File</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPackage && sampleFiles[selectedPackage].map((file, index) => (
                    <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 text-foreground">{file.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{file.type}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleDownload(file.file, `${file.name}.${file.type.toLowerCase()}`)}
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-teal-dark transition-colors font-semibold"
                        >
                          <Download className="w-4 h-4" />
                          Unduh
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Catatan */}
            <div className="mt-6 bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
              <h4 className="font-semibold text-foreground mb-2">📌 Catatan:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {selectedPackage && packageNotes[selectedPackage].map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Pricing;
