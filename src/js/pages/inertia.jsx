import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Inertia(props) {
  return (
    <div>
      <h1>Inertia</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </div>
  );
}
