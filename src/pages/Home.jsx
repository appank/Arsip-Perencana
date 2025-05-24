import { Link,  IconButton, Wrap, WrapItem, Box, Flex, useBreakpointValue, Image, Text, Stack, Badge, HStack, Circle, VStack, SimpleGrid, Button, ButtonGroup, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import profileImg from "../assets/arsib_logo.png";
import profileImg2 from "../assets/design_house.png";
import portfolioImg1 from "../assets/portfolio1.png";
import portfolioImg2 from "../assets/portfolio2.png";
import portfolioImg3 from "../assets/portfolio3.png";
import character1 from "../assets/character1.png";
import character2 from "../assets/character2.png";
import { Link as ScrollLink } from "react-scroll";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
function Home() {
  const [products, setProducts] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: false });
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
        <i className="ci ci-whatsapp ci-2x"></i>
      </a>
      {/* Home Section */}
      <Box
        id="home"
        // minH="100vh"
        minH={["auto", "auto", "100vh"]}
        px={{ base: 4, md: 16 }}
        pt={{ base: "50px", md: "80px" }} // sedikit dikurangi biar lebih pas
        pb={{ base: 8, md: 16 }}
        bg="white"
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
            alt="Baso Arfan Efendy"
          //mb={{ base: 6, md: 0 }}
          />
          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "center" }} maxW="600px">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="blue.700" mb={1}>
              Butuh Jasa Arsitek ?
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" textAlign={{ base: "center" }}>
              Dari ide hingga gambar kerja, kami bantu Anda melangkah pasti. yuk, mulai proyekmu  bareng <span style={{ color: 'blue' }}>Arsip Perencann</span>
            </Text>
          </Box>
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
      px={{ base: 4, md: 16 }}
      pt={{ base: "50px", md: "120px" }} // sedikit dikurangi biar lebih pas
      pb={{ base: 8, md: 16 }}
      bg="white"
    >
      <Text fontSize="4xl" fontWeight="bold" color="gray.700" textAlign={{ base: "center", md: "center" }}>
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
            src={character1}
            boxSize={{ base: "150px", md: "200px" }}
            borderRadius="full"
            objectFit="cover"
            alt="Character"
          //mb={{ base: 6, md: 0 }}
          />
          <Box textAlign={{ base: "center", md: "center" }} maxW="600px">
            
            <Text mt={5} px={5} fontSize={{ base: "md", md: "lg" }} color="gray.700" align={"left"}>
                  <ul>
                    <li>Ide banyak, tapi bingung menyatukannya jadi desain utuh?</li>
                    <li>Ingin rumah yang nyaman dan fungsional, tapi tetap estetik?</li>
                    <li>Sulit menemukan arsitek yang bisa diajak diskusi dengan tenang?</li>
                    <li>Tak ingin proses desain terasa ribet dan memusingkan?</li>
                    <li>Pusing koordinasi antar gambar teknis yang sering tidak sinkron?</li>
                    <li>Ingin dokumen DED, RAB, dan spesifikasi teknis tersusun rapi dan lengkap?</li>
                  </ul>
                </Text>
                <Text mt={3} fontSize="lg" color="gray.700" align={"left"}>
                Kalau iya, <span style={{ color: 'blue' }}>Arsip Perencann</span> siap bantu wujudkan proyek yang anda rencanakan dengan proses yang rapi, jelas, dan sesuai kebutuhan.
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
    >
      <Text fontSize="4xl" fontWeight="bold" color="gray.700" textAlign={{ base: "center", md: "center" }}>
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
            <Text mt={3} fontSize="lg" color="gray.700" align={"left"}>
                <span style={{ color: 'blue' }}>Arsip Perencann</span> adalah studio arsitektur yang berfokus pada perencanaan dan pengembangan proyek dengan pendekatan teknologi Building Information Modeling (BIM). Dengan BIM, setiap proyek yang kami kerjakan memiliki tingkat akurasi yang tinggi dalam perencanaan, visualisasi, hingga detail teknis yang dibutuhkan untuk pelaksanaan proyek. Teknologi ini memungkinkan proses desain menjadi lebih efisien, terintegrasi, dan minim kesalahan sejak tahap awal.
              </Text>
              <Text mt={3} fontSize="lg" color="gray.700" align={"left"}>
                Kami tidak hanya menangani proyek hunian maupun bangunan komersial, tetapi juga menyediakan layanan penyusunan dokumen teknis lengkap untuk keperluan proyek pemerintahan maupun non-pemerintahan. Layanan tersebut meliputi:
              </Text>
            <Text mt={5} px={5} fontSize="md" color="gray.700" align={"left"}>
                  <ul>
                    <li>Detail Engineering Design (DED)</li>
                    <li>Rencana Anggaran Biaya (RAB)</li>
                    <li>Spesifikasi Teknis</li>
                    <li>Dokumen Teknis Lainnya sesuai kebutuhan proyek</li>
                  </ul>
                </Text>
                <Text mt={3} fontSize="lg" color="gray.700" align={"left"}>
                Kalau iya, Arsip Perencana siap bantu wujudkan proyek yang anda rencanakan dengan proses yang rapi, jelas, dan sesuai kebutuhan.
              </Text>
            </Box>
             {/* Image Section */}
          <Image
            src={character2}
            boxSize={{ base: "150px", md: "300px" }}
            borderRadius="full"
            objectFit="cover"
            alt="Character"
          //mb={{ base: 6, md: 0 }}
          />
      </Flex>
    </Box>
   
      {/* Services Section */}
      <Box id="services" minH={["auto", "auto", "100vh"]} display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="white" px={6} py={10}>
        <Text fontSize="4xl" fontWeight="bold" color="gray.700">
          Apa yang kami tawarkan
        </Text>


        <Box height="30px" />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
          {/* Item 1 */}
          <Box
            textAlign="left"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.800" textAlign={"center"}>
              Harga Bersahabat
            </Text>
            <Text mt={2} fontSize="sm" color="whiteAlpha.800" textAlign={"center"}>
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

            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.800" textAlign={"center"}>
              Gratis Revisi
            </Text>
            <Text mt={2} fontSize="sm" color="whiteAlpha.800" textAlign={"center"}>
              Kami Tawarkan layanan desain bangun yang ramah di kantong
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

            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.800" textAlign={"center"}>
              Sesuai Impian & Budget
            </Text>
            <Text mt={2} fontSize="sm" color="whiteAlpha.800" textAlign={"center"}>
              Desain bangunan menyesuaikan kebutuhan, keinginan, dan anggaran Anda
            </Text>
          </Box>
          <Box
            textAlign="left"
            p={5}
            bg="blue.700"
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.800" textAlign={"center"}>
              Perencanaan dengan BIM
            </Text>
            <Text mt={2} fontSize="sm" color="whiteAlpha.800" textAlign={"center"}>
              Kami gunakan teknologi untuk hasil desain yang lebih akurat dan efisien
            </Text>
          </Box>

        </SimpleGrid>
      </Box>
      {/* Portofolio Section */}

      <Box id="portfolio" minH="auto" display="flex" flexDirection="column" bg={"white"} alignItems="center" justifyContent="center" px={6} py={10}>
        <Text fontSize="4xl" fontWeight="bold" color="gray.700">
          Real Project Yang Kami Kerjaan
        </Text>
        <Box height="20px" />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7}>
          {/* Item 1 */}
          <Box
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Image
              src={portfolioImg1}
              boxSize={{ base: "auto", md: "auto" }}
              objectFit="cover"
              borderRadius="xl"
              alt="portfolioImg1"
            />
          </Box>

          {/* Item 2 */}
          <Box
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Image
              src={portfolioImg2}
              boxSize={{ base: "auto", md: "auto" }}
              objectFit="cover"
              borderRadius="xl"
              alt="portfolioImg2"
            />
          </Box>
          {/* Item 3 */}
          <Box
            boxShadow="md"
            borderRadius="xl"
            _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
          >

            <Image
              src={portfolioImg3}
              boxSize={{ base: "auto", md: "auto" }}
              objectFit="cover"
              borderRadius="xl"
              alt="portfolioImg3"
            />
          </Box>
        </SimpleGrid>
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
          <Text fontSize="4xl" fontWeight="bold" color="gray.700">
            Pilih Paket Sesuai Kebutuhan Anda
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} >
            {/* Item 1 */}
            <Box
              textAlign="left"
              p={6}
              bg="blue.700"
              boxShadow="md"
              borderRadius="xl"
              _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                PAKET BASIC
              </Text>
              <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                Rp. 20.000 /M2
              </Text>
              <Text mt={3} mx={10} fontSize="lg" color="whiteAlpha.800" align={"center"}>
                Harga normal Rp.50.000 nikmati diskon 60%
              </Text>
              <Text mt={5} px={5} fontSize="md" color="whiteAlpha.800" align={"left"}>
                <ul>
                  <li>Visualisasi 3D Eksterior (Render)</li>
                  <li>3D Jelajah Bangunan (BIM)</li>
                  <li>Denah Perencanaan Tampak bangunan (Depan, belakang, samping kanan & samping kiri)</li>
                  <li>Potongan (melintan & memanjang)</li>
                </ul>
              </Text>
              {/* Tombol WhatsApp */}
              <Box textAlign="center" mt="auto" pt={5} >
                <Link
                 href="https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20Paket%20Basic"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                    borderRadius: "12px", // bulat banget
                    backgroundColor: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  aria-label="Pesan Paket Premium via WhatsApp" >
                  <i class="ci ci-whatsapp2" style={{ fontSize: "40px" }}></i>
                  <Text>PESAN PAKET BASIC</Text>
                </Link>
              </Box>
            </Box>
            {/* Item 2 */}
            <Box
              textAlign="left"
              p={6}
              bg="blue.700"
              boxShadow="md"
              borderRadius="xl"
              _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
              height="100%"
              display="flex"
              flexDirection="column"
            >

              <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                  PAKET PREMIUM
                </Text>
                <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                  Rp. 40.000 /M2
                </Text>
                <Text mt={3} mx={10} fontSize="lg" color="whiteAlpha.800" align={"center"}>
                  Harga normal Rp.100.000 nikmati diskon 60%
              </Text>
              <Text mt={5} px={5} fontSize="md" color="whiteAlpha.800" align={"left"}>
                <ul>
                  <li>Visualisasi 3D Eksterior (Render)</li>
                    <li>3D Jelajah Bangunan (BIM)</li>
                    <li>Denah Perencanaan Tampak bangunan (Depan, belakang, samping kanan & samping kiri)</li>
                    <li>Potongan (melintan & memanjang)</li>
                    <li>Rencana Atap</li>
                    <li>Rencana Pola Lantai</li>
                    <li>Rencana Platfon + Rangkai Platfond</li>
                    <li>Rencana Titik Lampu</li>
                    <li>Rencana Plumbing</li>
                    <li>Rencana Peletakan Kusen</li>
                    <li>Detail-detail (Terkait Arsitektu)</li>
                    <li>Rencana Pondasi</li>
                    <li>Rencana Kolom & Pembalokan</li>
                    <li>Gambar Detail Struktur</li>
                    <li>RAB (Rencana Anggaran Biaya)</li>
                </ul>
              </Text>
              {/* Tombol WhatsApp */}
              <Box textAlign="center" mt="auto" pt={5} >
                <Link
                    href="https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20Paket%20Premium."
                    isExternal
                    _hover={{ textDecoration: "none" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px",
                      borderRadius: "12px", // bulat banget
                      backgroundColor: "white",
                      fontWeight: "bold",
                      fontSize: "16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    aria-label="Pesan Paket Premium via WhatsApp"
                  >
                    <i class="ci ci-whatsapp2" style={{ fontSize: "40px" }}></i>
                    <Text>PESAN PAKET PREMIUM</Text>
                  </Link>
              </Box>
            </Box>

            {/* Item 3 */}
            <Box
              textAlign="left"
              p={6}
              bg="blue.700"
              boxShadow="md"
              borderRadius="xl"
              _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
              height="100%"
              display="flex"
              flexDirection="column"
            >

              <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                PAKET STANDAR
              </Text>
              <Text fontSize="x-large" fontWeight="bold" color="whiteAlpha.800" align={"center"}>
                Rp. 28.000 /M2
              </Text>
              <Text mt={3} mx={10} fontSize="lg" color="whiteAlpha.800" align={"center"}>
                Harga normal Rp.70.000 nikmati diskon 60%
              </Text>

              <Text mt={5} px={5} fontSize="md" color="whiteAlpha.800" align={"left"}>
                <ul>
                  <li>Visualisasi 3D Eksterior (Render)</li>
                  <li>3D Jelajah Bangunan (BIM)</li>
                  <li>Denah Perencanaan Tampak bangunan (Depan, belakang, samping kanan & samping kiri)</li>
                  <li>Potongan (melintan & memanjang)</li>
                  <li>Rencana Atap</li>
                  <li>Rencana Pola Lantai</li>
                  <li>Rencana Platfon + Rangkai Platfond</li>
                  <li>Rencana Titik Lampu</li>
                  <li>Rencana Plumbing</li>
                  <li>Rencana Peletakan Kusen</li>
                  <li>Detail-detail (Terkait Arsitektu)</li>
                </ul>
              </Text>
              {/* Tombol WhatsApp */}
              <Box textAlign="center" mt="auto" pt={5} >
                <Link
                  href="https://wa.me/6285796030907?text=Hallo,%20Saya%20ingin%20Memilih%20Paket%20Standar."
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                    borderRadius: "12px", // bulat banget
                    backgroundColor: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  aria-label="Pesan Paket Premium via WhatsApp"
                >
                  <i class="ci ci-whatsapp2" style={{ fontSize: "40px" }}></i>
                  <Text>PESAN PAKET STANDAR</Text>
                </Link>
              </Box>
            </Box>
          </SimpleGrid>
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
                Paket ini merupakan penawaran untuk pekerjaan ruma tinggal. Jika anda memiliki kebutuhan di luar paket Atau
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
