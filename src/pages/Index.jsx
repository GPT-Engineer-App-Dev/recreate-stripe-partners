import { Container, Text, VStack, Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const partners = [
  { name: "Partner 1", logo: "https://via.placeholder.com/150" },
  { name: "Partner 2", logo: "https://via.placeholder.com/150" },
  { name: "Partner 3", logo: "https://via.placeholder.com/150" },
  { name: "Partner 4", logo: "https://via.placeholder.com/150" },
  { name: "Partner 5", logo: "https://via.placeholder.com/150" },
  { name: "Partner 6", logo: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch" w="full">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Service
          </Heading>
          <Text fontSize="lg">We provide the best solutions for your business.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            Our Partners
          </Heading>
          <SimpleGrid columns={[2, null, 3]} spacing={10}>
            {partners.map((partner, index) => (
              <Box key={index} textAlign="center">
                <Image src={partner.logo} alt={partner.name} mb={2} />
                <Text>{partner.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;