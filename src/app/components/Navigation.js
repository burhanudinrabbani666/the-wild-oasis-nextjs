import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link className="text-blue-700" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-blue-700" href="/cabins">
          Cabins
        </Link>
      </li>
      <li>
        <Link className="text-blue-700" href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-blue-700" href="/account">
          Your Account
        </Link>
      </li>
    </ul>
  );
}
