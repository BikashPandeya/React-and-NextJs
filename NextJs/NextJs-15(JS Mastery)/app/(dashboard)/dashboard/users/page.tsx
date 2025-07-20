import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Inside users of dashboard</div>
      <ul>
        <li><Link href = "/dashboard/users/1">User 1</Link></li>
        <li><Link href = "/dashboard/users/2">User 2</Link></li>
        <li><Link href = "/dashboard/users/3">User 1</Link></li>
        <li><Link href = "/dashboard/users/4">User 4</Link></li>
      </ul>
    </>
  );
};

export default page;
