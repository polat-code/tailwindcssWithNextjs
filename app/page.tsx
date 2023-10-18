import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-yellow-600">Hello World!</h1>
      <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </>
  );
}
