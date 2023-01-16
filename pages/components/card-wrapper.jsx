import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

export default function CardWrapper(props) {
  return (
    <Card m={2} p={10}>
      <CardHeader>
        <Heading size="md">{props.title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {props.children}
        </Stack>
      </CardBody>
    </Card>
  );
}
