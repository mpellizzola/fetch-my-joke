import { users } from "./users";

export const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={`${user.firstName}-${user.lastName}`}>
            {user.firstName}, {user.lastName}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
