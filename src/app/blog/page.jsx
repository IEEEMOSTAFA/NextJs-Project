// filepath: d:\nextjs\first_project\src\app\blog\page.jsx
import React from "react";
import Link from "next/link";

const blogs = [
  { id: 1, title: "this is the title 1" },
  { id: 2, title: "this is the title 2" },
  { id: 3, title: "this is the title 3" },
];

export default function BlogListPage() {
  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          {/* <Link href={`/blog/${blog.id}`}>details</Link> */}
        </div>
      ))}
    </div>
  );
}