import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Hello <strong>Pages</strong> Router
      </h1>
      <div className="flex gap-12">
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
