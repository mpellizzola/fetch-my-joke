import { Users } from "./users/users.tsx";
import { SimpleButton } from "./simpleButton/simple-button";
import { Joke } from "./joke/joke.tsx";

const App = () => {
  return (
    <div className="app">
      <Users />
      <SimpleButton />
      <Joke />
    </div>
  );
};

export default App