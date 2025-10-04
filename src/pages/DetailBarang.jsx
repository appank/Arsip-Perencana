import {
  Box,
  Text,
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { ArrowBackIcon } from "@chakra-ui/icons";

const DetailBarang = () => {
  const { id } = useParams();

  // Data dummy berdasarkan ID
  const itemsData = {
    1: { namaBarang: "Laptop Dell XPS 13", deskripsi: "Laptop premium dengan layar InfinityEdge 13.4 inci", harga: "Rp 25.000.000", kategori: "Elektronik" },
    2: { namaBarang: "Mouse Logitech MX Master", deskripsi: "Mouse wireless dengan presisi tinggi", harga: "Rp 1.500.000", kategori: "Aksesori" },
    3: { namaBarang: "Keyboard Mechanical RGB", deskripsi: "Keyboard gaming dengan switch mechanical", harga: "Rp 2.000.000", kategori: "Aksesori" },
    4: { namaBarang: "Monitor LG 27 inch", deskripsi: "Monitor IPS 4K dengan refresh rate 144Hz", harga: "Rp 8.000.000", kategori: "Elektronik" },
    5: { namaBarang: "Webcam Logitech C920", deskripsi: "Webcam HD dengan auto focus", harga: "Rp 1.200.000", kategori: "Aksesori" },
    6: { namaBarang: "Headset Sony WH-1000XM4", deskripsi: "Headset noise cancelling premium", harga: "Rp 5.000.000", kategori: "Audio" },
    7: { namaBarang: "SSD Samsung 1TB", deskripsi: "SSD NVMe dengan kecepatan baca 7000 MB/s", harga: "Rp 2.500.000", kategori: "Storage" },
    8: { namaBarang: "RAM Corsair 16GB", deskripsi: "RAM DDR4 3200MHz untuk gaming", harga: "Rp 1.800.000", kategori: "Komponen" },
    9: { namaBarang: "Printer HP LaserJet", deskripsi: "Printer laser untuk kantor", harga: "Rp 4.500.000", kategori: "Periferal" },
    10: { namaBarang: "Router TP-Link AX3000", deskripsi: "Router WiFi 6 dual band", harga: "Rp 1.000.000", kategori: "Networking" },
  };

  const item = itemsData[id] || { namaBarang: "Barang tidak ditemukan", deskripsi: "Data tidak tersedia", harga: "-", kategori: "-" };

  return (
    <AdminLayout>
      <Box bg="gray.50" minH="100vh">
        {/* Main Content */}
        <Box px={8} py={6}>
          {/* Back Button */}
          <Button
            as={RouterLink}
            to="/dashboard-admin"
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
            mb={4}
            colorScheme="teal"
          >
            Kembali ke Dashboard
          </Button>

          {/* Title */}
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Detail Barang
          </Text>

          {/* Breadcrumb */}
          <Breadcrumb mb={6} fontSize="sm" color="gray.600">
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/dashboard-admin">
                Dashboard Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Detail Barang</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Detail Card */}
          <Card maxW="800px">
            <CardBody>
              <Stack spacing={4}>
                <Heading size="lg" color="teal.600">
                  {item.namaBarang}
                </Heading>
                <Divider />
                
                <Box>
                  <Text fontWeight="bold" color="gray.600" mb={1}>
                    ID Barang
                  </Text>
                  <Text fontSize="lg">{id}</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold" color="gray.600" mb={1}>
                    Kategori
                  </Text>
                  <Text fontSize="lg">{item.kategori}</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold" color="gray.600" mb={1}>
                    Deskripsi
                  </Text>
                  <Text fontSize="lg">{item.deskripsi}</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold" color="gray.600" mb={1}>
                    Harga
                  </Text>
                  <Text fontSize="xl" color="teal.600" fontWeight="bold">
                    {item.harga}
                  </Text>
                </Box>

                <Divider />

                <Flex gap={3}>
                  <Button colorScheme="teal" size="md">
                    Edit Barang
                  </Button>
                  <Button colorScheme="red" variant="outline" size="md">
                    Hapus Barang
                  </Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default DetailBarang;

