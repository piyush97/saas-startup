import { Flex, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import UniversityCard from "../../components/UniversityCard";
import { API_URL } from "../../constants/appConstants";

type UniversitesContainerProps = {
  search: string;
  onSetCountry: string;
};

const UniversitiesContainer: React.FC<UniversitesContainerProps> = ({
  search,
  onSetCountry,
}) => {
  const { isLoading, error, data } = useQuery(
    [
      "universities",
      { type: [search, onSetCountry], refetchAllOnWindowFocus: false },
    ],
    () => {
      return axios.get(`${API_URL}?country=${onSetCountry}&name=${search}`);
    }
  );

  return (
    <Flex width="full" align="center" justifyContent="center">
      {error && <Heading>Error in fetching</Heading>}
      {!error && isLoading ? (
        <Spinner color="red.500" />
      ) : (
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-around"
        >
          {data.data.map(
            ({ domains, web_pages, name, country, alpha_two_code }) => (
              <UniversityCard
                key={name}
                name={name}
                country={country}
                code={alpha_two_code}
                web_pages={web_pages}
                domain={domains}
              />
            )
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default UniversitiesContainer;
