import Link from "next/link";   // 👈 must add this

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <p>
        <Link href="/blog/details">Blog Details</Link>
      </p>
    </div>
  );
}
