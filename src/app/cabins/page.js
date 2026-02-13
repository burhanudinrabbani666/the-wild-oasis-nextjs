export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data); // This is render in server not in client

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map((user) => {
          return <li key={user.name}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
