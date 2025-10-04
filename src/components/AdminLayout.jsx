import { Box, Flex } from "@chakra-ui/react";

const AdminLayout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" bg="gray.50">
      {/* Konten halaman tanpa Topbar */}
      <Box flex="1" py={1}>
        {children}
      </Box>
    </Flex>
  );
};

export default AdminLayout;



