import React from "react";

export default function PostTable({ posts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.slug}>
            <td>{post.title}</td>
            <td>{post.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
