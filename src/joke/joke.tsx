import { url } from "../Utility";
import { joke as mock } from "./joke";

export const Joke = () => {
  return (
    <div>
      <h1>Joke</h1>
      <p>{mock.joke}</p>
    </div>
  );
};
