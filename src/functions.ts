import { TestProps } from "./types";

export const testing = ({ message }: { message: TestProps }) => {
  console.log("Testing!");
  console.log(message);
};
