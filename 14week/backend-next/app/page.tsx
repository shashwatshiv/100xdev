import axios from "axios";

async function getData() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}
export default async function Home() {
  const userData = await getData();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Hello World
      <div className=" border p-6">
        <div>{userData.email}</div>
        <div>{userData.name}</div>
      </div>
    </div>
  );
}
