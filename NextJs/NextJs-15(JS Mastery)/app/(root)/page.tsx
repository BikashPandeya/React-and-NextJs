import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("Welcome to Next.js");
  // This is a simple component that renders a heading
  return (
    <>
      <Hello />
      <h1 className="text-3xl">Welcome to Nextjs</h1>
    </>
  );
}
