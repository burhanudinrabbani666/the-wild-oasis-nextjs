import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl">The wild Oasis. welcome to paradise</h1>
      <Link href="/cabins">Explore luxury Cabins</Link>
    </div>
  );
}
