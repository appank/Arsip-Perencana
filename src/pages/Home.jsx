import {
  Link,
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Stack,
  SimpleGrid,
  useToast,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import profileImg from "../assets/arsib_logo.png";
import profileImg2 from "../assets/design_house.png";
import portfolioImg1 from "../assets/portfolio1.jpeg";
import portfolioImg2 from "../assets/portfolio2.jpeg";
import portfolioImg3 from "../assets/portfolio3.jpeg";
import portfolioImg4 from "../assets/portfolio4.jpeg";
import portfolioImg5 from "../assets/portfolio5.jpeg";
import portfolioImg6 from "../assets/portfolio6.jpeg";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import character3 from "../assets/character3.png";
import { Link as ScrollLink } from "react-scroll";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
function Home() {
  const [products, setProducts] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedImg, setSelectedImg] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState("desain-bangunan");

  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    onOpen();
  };
 const menuItems = [
  { name: "Tentang Kami", to: "about2" },
  { name: "Layanan Kami", to: "services" },
  { name: "Alasan Memilih Kami", to: "services" },
  { name: "Portofolio", to: "portfolio" },
  { name: "Pilihan Paket", to: "paket" },
  { name: "Hubungi Kami", to: "paket" },
];

  const toast = useToast({ position: "top", duration: 5000, isClosable: true });

  return (

    <DashboardLayout>
      <a
        href="https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20menghubungi%20Anda."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",       // buat lingkaran
          height: "50px",      // buat lingkaran
          borderRadius: "50%", // bulat sempurna
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          display: "flex",            // untuk center ikon
          alignItems: "center",       // untuk center ikon
          justifyContent: "center",   // untuk center ikon
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <FaWhatsapp size={32} color="#25D366" />
      </a>
      {/* Home Section */}
      <Box
        id="home"
        minH={["auto", "auto", "100vh"]}
        pt={{ base: 4, sm: 6, md: 10, lg: 16 }}
        pb={{ base: 4, sm: 6, md: 10, lg: 80 }}
        bg="white"
        display="flex" // tambahkan ini
        flexDirection="column" // tambahkan ini
        justifyContent="center" // tambahkan ini
        alignItems="center"
      >
        <Flex
          direction={{ base: "column", md: "column" }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 8 }}
          h="100%"
        >
          {/* Image Section */}
          <Image
            src={profileImg}
            boxSize={{ base: "150px", md: "200px" }}
            borderRadius="full"
            objectFit="cover"
            alt="profile"
          />
          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "center" }} maxW="600px">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="blue.700" mb={1}>
              Butuh Jasa Arsitek ?
            </Text>

            <Text fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" textAlign={{ base: "center" }}>
              Dari ide hingga gambar kerja, kami bantu Anda melangkah pasti. yuk, mulai proyekmu  bareng <span style={{ color: 'blue' }}>Arsip Perencana</span>
            </Text>
          </Box>
          <Box maxH={10}></Box>
        </Flex>
      </Box>
      {/* About Section */}

      <Box
        id="about"
        minH="auto"
        display="flex"
        //ukuran gambar
        justifyContent="center"


      >
        <Image
          src={profileImg2}
          boxSize={{ base: "auto", md: "auto" }}
          objectFit="cover"
          alt="Gambar Desain Rumah" 
        />
      </Box>
      {/* about1 */}
      <Box
      id="about1"
        minH={["auto", "auto", "100vh"]}
        p={5}
        display="flex" // tambahkan ini
        flexDirection="column" // tambahkan ini
        justifyContent="center" // tambahkan ini
        alignItems="center"
        pt={{ base: "auto", md: "auto" }}
        pb={{ base: "auto", md: "auto" }}
      bg="white"
    >
        <Box height="60px" />
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.700" textAlign={{ base: "center", md: "center" }}>
          Ingin Bangun Rumah, Tapi Masih Ragu Mulai dari Mana?
        </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 8, md: 16 }}
        h="100%"
      >
        {/* Image Section */}
          <Image
            src={character3}
            boxSize={{ base: "160px", md: "250px" }}
            borderRadius="full"
            objectFit="cover"
            alt="Character"
          //mb={{ base: 6, md: 0 }}
          />
          <Box textAlign={{ base: "center", md: "center" }} maxW="600px">
            
            <Text mt={5} px={5} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" align={"left"}>
                  <ul>
                    <li>Ide banyak, tapi bingung menyatukannya jadi desain utuh?</li>
                    <li>Ingin rumah yang nyaman dan fungsional, tapi tetap estetik?</li>
                    <li>Sulit menemukan arsitek yang bisa diajak diskusi dengan tenang?</li>
                    <li>Tak ingin proses desain terasa ribet dan memusingkan?</li>
                    <li>Pusing koordinasi antar gambar teknis yang sering tidak sinkron?</li>
                    <li>Ingin dokumen DED, RAB, dan spesifikasi teknis tersusun rapi dan lengkap?</li>
                  </ul>
                </Text>
            <Text mt={3} fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }} color="gray.700" align={"left"}>
              Kalau iya, <span style={{ color: 'blue' }}>Arsip Perencana</span> siap bantu wujudkan proyek yang anda rencanakan dengan proses yang rapi, jelas, dan sesuai kebutuhan.
              </Text>
            </Box>
      </Flex>
    </Box>
    {/* about2 */}
      <Box
      id="about2"
        minH={["auto", "auto", "100vh"]}
      p={5}
        display="flex" // tambahkan ini
        flexDirection="column" // tambahkan ini
        justifyContent="center" // tambahkan ini
        alignItems="center"
      bg="gray.70"
        pt={{ base: "auto", md: "auto" }}
        pb={{ base: "auto", md: "auto" }}
    >

        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.700" textAlign={{ base: "center", md: "center" }}>
          Tentang Arsip Perencana
        </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 8, md: 16 }}
        h="100%"
      >
       
          <Box textAlign={{ base: "center", md: "center" }} maxW="600px">
            <Text mt={3} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" align={"left"}>
              <span style={{ color: 'blue' }}>Arsip Perencana</span> adalah studio arsitektur yang berfokus pada perencanaan dan pengembangan proyek dengan pendekatan teknologi Building Information Modeling (BIM). Dengan BIM, setiap proyek yang kami kerjakan memiliki tingkat akurasi yang tinggi dalam perencanaan, visualisasi, hingga detail teknis yang dibutuhkan untuk pelaksanaan proyek. Teknologi ini memungkinkan proses desain menjadi lebih efisien, terintegrasi, dan minim kesalahan sejak tahap awal.
              </Text>
            <Text mt={3} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" align={"left"}>
                Kami tidak hanya menangani proyek hunian maupun bangunan komersial, tetapi juga menyediakan layanan penyusunan dokumen teknis lengkap untuk keperluan proyek pemerintahan maupun non-pemerintahan. Layanan tersebut meliputi:
              </Text>
            <Text mt={5} px={5} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" align={"left"}>
                  <ul>
                    <li>Detail Engineering Design (DED)</li>
                    <li>Rencana Anggaran Biaya (RAB)</li>
                    <li>Spesifikasi Teknis</li>
                    <li>Dokumen Teknis Lainnya sesuai kebutuhan proyek</li>
                  </ul>
                </Text>
            <Text mt={3} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="gray.700" align={"left"}>
                Kalau iya, Arsip Perencana siap bantu wujudkan proyek yang anda rencanakan dengan proses yang rapi, jelas, dan sesuai kebutuhan.
              </Text>
            </Box>
             {/* Image Section */}
          <Image
            src={character1}
            boxSize={{ base: "150px", md: "300px" }}
            objectFit="scale-down"  // Mengecilkan jika terlalu besar, tidak memotong
            alt="Character"
          />
      </Flex>
    </Box>
   
      {/* Services Section */}
      <Box id="services"
        minH={"auto"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="white"
        p={5}
      >
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.700">
          Apa yang kami tawarkan
        </Text>


        <Box height="30px" />
        <SimpleGrid columns={{ base: 1, md: 2 }}
          spacing={6}
          maxW="800px"     // Membatasi lebar grid
          w="100%">
          {/* Item 1 */}
          <Box
            textAlign="left"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" color="white" textAlign={"center"}>
              Harga Bersahabat
            </Text>
            <Text mt={2} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="white" textAlign={"center"}>
              Kami Tawarkan layanan desain bangun yang ramah di kantong
            </Text>
          </Box>

          {/* Item 2 */}
          <Box
            textAlign="left"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" color="white" textAlign={"center"}>
              Gratis Revisi
            </Text>
            <Text mt={2} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="white" textAlign={"center"}>
              Kami berikan layanan revisi desain bangunan tanpa biaya tambahan
            </Text>
          </Box>
          {/* Item 3 */}
          <Box
            textAlign="left"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" color="white" textAlign={"center"}>
              Sesuai Impian & Budget
            </Text>
            <Text mt={2} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="white" textAlign={"center"}>
              Desain bangunan menyesuaikan kebutuhan, keinginan, dan anggaran Anda
            </Text>
          </Box>
          <Box
            textAlign="center"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" color="white" textAlign={"center"}>
              Perencanaan dengan BIM
            </Text>
            <Text mt={2} fontSize={{ base: "sm", sm: "md", md: "lg", }} color="white" textAlign={"center"}>
              Kami gunakan teknologi untuk hasil desain yang lebih akurat dan efisien
            </Text>
          </Box>

        </SimpleGrid>
      </Box>
      {/* Portofolio Section */}

      <Box id="portfolio" minH="auto" display="flex" flexDirection="column" bg={"white"} alignItems="center" justifyContent="center" px={6} py={10}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.700" textAlign="center">
          Real Project Yang Kami Kerjakan
        </Text>
        <Box height="20px" />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7}>
          {[portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5, portfolioImg6].map((img, idx) => (
            <Box
              key={idx}
              boxShadow="md"
              borderRadius="xl"
              _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
              cursor="pointer"
              onClick={() => handleImageClick(img)}
            >
              <Image
                src={img}
                boxSize={{ base: "auto", md: "300px" }}
                objectFit="cover"
                borderRadius="xl"
                alt={`portfolioImg${idx + 1}`}
              />
            </Box>
          ))}
        </SimpleGrid>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none" maxW="fit-content">
            <ModalBody p={0}>
              <Image
                src={selectedImg}
                alt="Zoomed portfolio"
                borderRadius="xl"
                maxH="80vh"
                style={{
                  touchAction: "manipulation",
                  WebkitUserSelect: "auto",
                  userSelect: "auto",
                }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>

      </Box>


      <Box
        id="paket"
        minH="auto"
        bg="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >

        <Flex direction="column" p={8} align="center" justify="center" gap={8} w="full" maxW="1200px">
          {/* Teks di atas */}
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.700" textAlign="center">
            Pilih Paket Sesuai Kebutuhan Anda
          </Text>
          {/* Tab Section - Desain Bangunan & Desain Interior */}
          <Box width="100%" >
            {/* Tab Buttons */}
            <Flex
              borderBottom="2px solid"
              borderColor="gray.200"
              mb={6}
              gap={0}
              justifyContent="center"
            >
              <Box
                px={6}
                py={3}
                cursor="pointer"
                borderBottom={activeTab === "desain-bangunan" ? "3px solid" : "none"}
                borderColor="blue.700"
                bg={activeTab === "desain-bangunan" ? "white" : "transparent"}
                fontWeight={activeTab === "desain-bangunan" ? "bold" : "normal"}
                color={activeTab === "desain-bangunan" ? "black" : "gray.600"}
                onClick={() => setActiveTab("desain-bangunan")}
                _hover={{ bg: "white" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text fontSize={{ base: "sm", md: "md" }}>🏠 Desain Bangunan</Text>
              </Box>
              <Box
                px={6}
                py={3}
                cursor="pointer"
                borderBottom={activeTab === "desain-interior" ? "3px solid" : "none"}
                borderColor="blue.700"
                bg={activeTab === "desain-interior" ? "white" : "transparent"}
                fontWeight={activeTab === "desain-interior" ? "bold" : "normal"}
                color={activeTab === "desain-interior" ? "black" : "gray.600"}
                onClick={() => setActiveTab("desain-interior")}
                _hover={{ bg: "white" }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text fontSize={{ base: "sm", md: "md" }}>🛋️ Desain Interior</Text>
              </Box>
            </Flex>

            {/* Tab Title */}
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.800" mb={6} textAlign="center">
              {activeTab === "desain-bangunan" && "Koleksi Paket Desain Bangunan"}
              {activeTab === "desain-interior" && "Koleksi Paket Desain Interior"}
            </Text>

            {/* Tab Content - Desain Bangunan */}
            {activeTab === "desain-bangunan" && (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {[
                  {
                    name: "PAKET BASIC", price: "Rp. 25.000 /M2", normalPrice: "Rp.50.000", items: [
                      "Visualisai 3D Eksterior (Render)",
                      "3D Jelajah Bangunan (BIM)",
                      "Denah Perencanaan",
                      "Tampak bangunan (Depan, belakang, samping kanan & kiri)",
                      "Potongan (melintang & memanjang)"
                    ], color: "#4361ee"
                  },
                  {
                    name: "PAKET PREMIUM", price: "Rp. 50.000 /M2", normalPrice: "Rp.100.000", items: [
                      "Visualisai 3D Eksterior (Render)",
                      "3D Jelajah Bangunan (BIM)",
                      "Denah Perencanaan",
                      "Tampak bangunan (Depan, belakang, samping kanan & kiri)",
                      "Potongan (melintang & memanjang)",
                      "Rencana Atap",
                      "Rencana Pola Lantai",
                      "Rencana Plafon + Rangka Plafond",
                      "Rencana Titik Lampu",
                      "Rencana Plumbing",
                      "Rencana Peletakan Kusen",
                      "Detail-detail (Terkait Arsitektur)",
                      "Rencana Pondasi",
                      "Rencana Kolom & Pembalokan",
                      "Gambar Detail Struktur",
                      "RAB (Rencana Anggaran Biaya)"
                    ], color: "#3a86ff"
                  },
                  {
                    name: "PAKET STANDAR", price: "Rp. 35.000 /M2", normalPrice: "Rp.70.000", items: [
                      "Visualisai 3D Eksterior (Render)",
                      "3D Jelajah Bangunan (BIM)",
                      "Denah Perencanaan",
                      "Tampak bangunan (Depan, belakang, samping kanan & kiri)",
                      "Potongan (melintang & memanjang)",
                      "Rencana Atap",
                      "Rencana Pola Lantai",
                      "Rencana Plafon + Rangka Plafond",
                      "Rencana Titik Lampu",
                      "Rencana Plumbing",
                      "Rencana Peletakan Kusen",
                      "Detail-detail (Terkait Arsitektur)"
                    ], color: "#4895ef"
                  },
                ].map((paket, idx) => (
                  <Box
                    key={idx}
                    bg={paket.color}
                    borderRadius="xl"
                    boxShadow="lg"
                    overflow="hidden"
                    _hover={{ transform: "scale(1.03)", boxShadow: "xl", transition: "0.3s" }}
                    transition="0.3s"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                  >
                    {/* Header */}
                    <Text fontSize="x-large" fontWeight="bold" color="white" align="center" mb={2}>
                      {paket.name}
                    </Text>
                    <Text fontSize="x-large" fontWeight="bold" color="white" align="center" mb={2}>
                      {paket.price}
                    </Text>
                    <Text fontSize="lg" color="white" align="center" mb={4}>
                      Harga normal {paket.normalPrice} nikmati diskon 50%
                    </Text>

                    {/* List Items */}
                    <Box flex="1" mb={4}>
                      <Text fontSize="md" color="white" align="left">
                        <ul style={{ paddingLeft: "20px" }}>
                          {paket.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Text>
                    </Box>

                    {/* Buttons */}
                    <Stack spacing={3} mt="auto">
                      <Button
                        colorScheme="whiteAlpha"
                        bg="white"
                        color="blue.700"
                        size="md"
                        leftIcon={<Text>📦</Text>}
                        w="100%"
                        fontWeight="bold"
                      >
                        Produk
                      </Button>
                      <Link
                        href={`https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20${paket.name}`}
                        isExternal
                        _hover={{ textDecoration: "none" }}
                        w="100%"
                      >
                        <Button
                          bg="white"
                          color="blue.700"
                          size="md"
                          leftIcon={<FaWhatsapp size={20} color="#25D366" />}
                          w="100%"
                          fontWeight="bold"
                        >
                          PESAN {paket.name}
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            )}

            {/* Tab Content - Desain Interior */}
            {activeTab === "desain-interior" && (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {[
                  {
                    name: "PAKET BASIC", price: "Rp. 25.000 /M2", normalPrice: "Rp.50.000", items: [
                      "Konsultasi Desain Interior",
                      "Visualisasi 3D Interior",
                      "Denah Layout Ruangan",
                      "Pemilihan Warna & Material",
                      "List Furniture & Aksesoris"
                    ], color: "#4361ee"
                  },
                  {
                    name: "PAKET PREMIUM", price: "Rp. 50.000 /M2", normalPrice: "Rp.100.000", items: [
                      "Konsultasi Desain Interior",
                      "Visualisasi 3D Interior",
                      "Denah Layout Ruangan",
                      "Pemilihan Warna & Material",
                      "List Furniture & Aksesoris",
                      "Detail Furnitur Custom",
                      "Rencana Pencahayaan",
                      "Rencana Plafon & Partisi",
                      "Detail Material & Finishing",
                      "RAB Interior",
                      "Gambar Kerja Detail",
                      "3D Walkthrough Animation"
                    ], color: "#3a86ff"
                  },
                  {
                    name: "PAKET STANDAR", price: "Rp. 35.000 /M2", normalPrice: "Rp.70.000", items: [
                      "Konsultasi Desain Interior",
                      "Visualisasi 3D Interior",
                      "Denah Layout Ruangan",
                      "Pemilihan Warna & Material",
                      "List Furniture & Aksesoris",
                      "Detail Furnitur Custom",
                      "Rencana Pencahayaan",
                      "Rencana Plafon & Partisi"
                    ], color: "#4895ef"
                  },
                ].map((paket, idx) => (
                  <Box
                    key={idx}
                    bg={paket.color}
                    borderRadius="xl"
                    boxShadow="lg"
                    overflow="hidden"
                    _hover={{ transform: "scale(1.03)", boxShadow: "xl", transition: "0.3s" }}
                    transition="0.3s"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                  >
                    {/* Header */}
                    <Text fontSize="x-large" fontWeight="bold" color="white" align="center" mb={2}>
                      {paket.name}
                    </Text>
                    <Text fontSize="x-large" fontWeight="bold" color="white" align="center" mb={2}>
                      {paket.price}
                    </Text>
                    <Text fontSize="lg" color="white" align="center" mb={4}>
                      Harga normal {paket.normalPrice} nikmati diskon 50%
                    </Text>

                    {/* List Items */}
                    <Box flex="1" mb={4}>
                      <Text fontSize="md" color="white" align="left">
                        <ul style={{ paddingLeft: "20px" }}>
                          {paket.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </Text>
                    </Box>

                    {/* Buttons */}
                    <Stack spacing={3} mt="auto">
                      <Button
                        colorScheme="whiteAlpha"
                        bg="white"
                        color="blue.700"
                        size="md"
                        leftIcon={<Text>📦</Text>}
                        w="100%"
                        fontWeight="bold"
                      >
                        Produk
                      </Button>
                      <Link
                        href={`https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20${paket.name}`}
                        isExternal
                        _hover={{ textDecoration: "none" }}
                        w="100%"
                      >
                        <Button
                          bg="white"
                          color="blue.700"
                          size="md"
                          leftIcon={<FaWhatsapp size={20} color="#25D366" />}
                          w="100%"
                          fontWeight="bold"
                        >
                          PESAN {paket.name}
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Box>
          <Box pb={5}>
            {/* Alert */}
            <Alert
              status="error"
              maxHeight="auto"
              borderRadius="md"
              flexDirection="column" // Mengatur tata letak vertikal
              alignItems="flex-start" // Menyelaraskan konten ke kiri
              p={4} // Menambahkan padding untuk estetika
            >
              <Flex alignItems="center" mb={2}> {/* Membungkus AlertIcon dan AlertTitle */}
                <AlertIcon boxSize={5} />
                <AlertTitle fontSize="lg">
                  Catatan :
                </AlertTitle>
              </Flex>
              <AlertDescription mt={2}>
                Paket ini merupakan penawaran untuk pekerjaan rumah tinggal. Jika anda memiliki kebutuhan di luar paket Atau
                ingin mengajukan penawaran harga sendiri, jangan ragu untuk menghubungi kami. kami terbuka untuk berdiskusi dan menyelesaikan layanan sesuai kebutuhan anda
              </AlertDescription>
            </Alert>
          </Box>
        </Flex>

      </Box>
      {/* Footer */}
      <Box id="footer" minH="auto" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="gray.100" px={4} py={8}>


        <Box height="10px" />
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={7}>
          {/* Item 1 */}
          <Box
            textAlign="left"
            p={2}

          >

            <Image
              src={profileImg}
              boxSize={{ base: "150px", md: "200px" }}
              objectFit="cover"
              alt="Baso Arfan Efendy"
            //mb={{ base: 6, md: 0 }}
            />
          </Box>

          {/* Item 2 */}
          <Box
            textAlign="left"
            p={5}
          >

            <Text fontSize="x-large" fontWeight="bold" color="black" align={"left"}>
              Layanan Kami
            </Text>
            <Text mt={5} px={5} fontSize="md" color="black" align={"left"}>
              <ul>
                <li>Jasa Desain Perumahan</li>
                <li>Jasa Desain Rumah Tinggal</li>
                <li>Jasa Penyedia Dokumen Teknis</li>
                <li>Proyek Pemerintahan / Non Pemerintahan</li>

              </ul>
            </Text>
          </Box>
          {/* Item 3 */}
          <Box
            textAlign="left"
            p={5}
          >
            <Text fontSize="x-large" fontWeight="bold" color="black" align={"left"}>
              Navigasi Cepat
            </Text>
            <Stack >
        {menuItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </ScrollLink>
        ))}
      </Stack>
          </Box>
          {/* Item 3 */}
          <Box
            textAlign="left"
            p={5}
          >

            <Text fontSize="x-large" fontWeight="bold" color="black" align={"left"}>
              Hubungi Kami
            </Text>
            <Text mt={5} px={5} fontSize="md" color="black" align={"left"}>
              <ul>
                <li>arsipperencana1345@gmail.com</li>
                <li>085796030907</li>
                <li>Kota Makassar, Sulawesi Selatan</li>

              </ul>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </DashboardLayout>

  );
}

export default Home;