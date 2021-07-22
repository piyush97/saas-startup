import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "@reach/router";

type UniversityProps = {
  name: string;
  country: string;
  code: string;
  web_pages: [string];
  domain: [string];
};

const UniversityCard: React.FC<UniversityProps> = ({
  name,
  country,
  code,
  web_pages,
  domain,
}) => {
  const property = {
    imageUrl: "https://picsum.photos/600/400",
    imageAlt: "Just a Random Image for Now",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" my={5}>
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Heading pl={4}>{name}</Heading>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {country} &bull; {code}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>
          Website: <Link to={web_pages[0]}>{domain[0]}</Link>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {/* To be implemented later on */}
          {/* {Array(5)
            .fill("")
            .map((_) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))} */}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UniversityCard;
