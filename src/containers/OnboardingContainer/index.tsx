import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { onBoardingFormProps } from "../../utils/onBoardingForm";
type OnboardingContainerProps = {
  heading: string;
  onBoardingForm: onBoardingFormProps[];
};
/**
 * OnboardingContainer
 *
 * @param {*} {
 *   heading,
 *   onBoardingForm,
 * }
 * @returns {React.FC}
 */
const OnboardingContainer: React.FC<OnboardingContainerProps> = ({
  heading,
  onBoardingForm,
}) => {
  return (
    <Box border="thin" borderWidth="1px" borderRadius="lg">
      <Heading py={4}>{heading}</Heading>
      <Flex>
        {onBoardingForm.map(({ id, _id, label, type, helperText }) => (
          <FormControl id={id} maxW="md" key={_id}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} />
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        ))}
      </Flex>
    </Box>
  );
};

export default OnboardingContainer;
