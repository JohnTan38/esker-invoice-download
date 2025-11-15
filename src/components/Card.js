import Link from 'next/link';

/**
 * Simple card component used to render links as clickable panels. It wraps
 * children in a styled `div` and forwards the `href` prop to the
 * underlying Next.js `Link` component.
 */
export default function Card({ title, href }) {
  return (
    <Link href={href} className="block">
      <div className="p-4 bg-white border rounded shadow hover:bg-gray-100">
        <h3 className="text-lg font-semibold mb-0">{title}</h3>
      </div>
    </Link>
  );
}