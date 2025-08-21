import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div className="bg-yellow-500 my-10 text-red-500">
      <ul>
        <li>
          <Link href="/blog/1">Blog 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog 2</Link>
        </li>
      </ul>

      {/* This renders the child pages */}
      {children}
    </div>
  );
}
