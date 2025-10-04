import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

const DashboardAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Data dummy untuk tabel
  const [items, setItems] = useState([
    { id: 1, namaBarang: "Laptop Dell XPS 13", url: "/detail/1" },
    { id: 2, namaBarang: "Mouse Logitech MX Master", url: "/detail/2" },
    { id: 3, namaBarang: "Keyboard Mechanical RGB", url: "/detail/3" },
    { id: 4, namaBarang: "Monitor LG 27 inch", url: "/detail/4" },
    { id: 5, namaBarang: "Webcam Logitech C920", url: "/detail/5" },
    { id: 6, namaBarang: "Headset Sony WH-1000XM4", url: "/detail/6" },
    { id: 7, namaBarang: "SSD Samsung 1TB", url: "/detail/7" },
    { id: 8, namaBarang: "RAM Corsair 16GB", url: "/detail/8" },
    { id: 9, namaBarang: "Printer HP LaserJet", url: "/detail/9" },
    { id: 10, namaBarang: "Router TP-Link AX3000", url: "/detail/10" },
  ]);

  // Filter berdasarkan pencarian
  const filteredItems = items.filter((item) =>
    item.namaBarang.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <Box bg="gray.50" minH="100vh">
        {/* Main Content */}
        <Box px={8} py={6}>
          {/* Title */}
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Dashboard Admin
          </Text>

          {/* Breadcrumb */}
          <Breadcrumb mb={6} fontSize="sm" color="gray.600">
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Dashboard Admin</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Table Container */}
          <Box bg="white" borderRadius="lg" boxShadow="sm" p={6}>
            {/* Search Box */}
            <Flex justify="flex-end" mb={4}>
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Cari berdasarkan nama..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                  _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal.400" }}
                />
              </InputGroup>
            </Flex>

            {/* Table */}
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead bg="gray.50">
                  <Tr>
                    <Th color="gray.700" fontWeight="bold" textTransform="uppercase" fontSize="xs">
                      ID
                    </Th>
                    <Th color="gray.700" fontWeight="bold" textTransform="uppercase" fontSize="xs">
                      NAMA BARANG
                    </Th>
                    <Th color="gray.700" fontWeight="bold" textTransform="uppercase" fontSize="xs" textAlign="center">
                      AKSI
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredItems.map((item) => (
                    <Tr key={item.id} _hover={{ bg: "gray.50" }}>
                      <Td fontSize="sm">{item.id}</Td>
                      <Td fontSize="sm">{item.namaBarang}</Td>
                      <Td textAlign="center">
                        <Button
                          as={RouterLink}
                          to={item.url}
                          size="sm"
                          colorScheme="teal"
                          bg="teal.500"
                          color="white"
                          _hover={{ bg: "teal.600" }}
                          borderRadius="md"
                        >
                          Edit
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                  {filteredItems.length === 0 && (
                    <Tr>
                      <Td colSpan={3} textAlign="center" py={8}>
                        <Text color="gray.500">Tidak ada data yang ditemukan</Text>
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default DashboardAdmin;

