import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Inertia(props) {
  const locations = props.locations;

  return (
    <div>
      <h1>Inertia</h1>
      <div className="my-6">
        {locations.map((location) => (
          <div key={location.id}>
            <Link href={`/inertia/locations/${location.id}`}>{location.name}</Link>
          </div>
        ))}
      </div>
      <p>
        <Link href="/about">About</Link>
      </p>
    </div>
  );
}
