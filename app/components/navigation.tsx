'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
}
