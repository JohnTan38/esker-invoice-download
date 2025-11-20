import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

// Define the order of pages for navigation. The slug must match the
// pathname of the Next.js routes. Titles are used in the sidebar and
// for next/previous navigation.
const pages = [
  { slug: '/', title: 'Home' },
  { slug: '/app-features', title: 'App Features' },
  { slug: '/automate-on-demand', title: 'Automate OnDemand' },
  { slug: '/user-reviews', title: 'User Reviews' },
  { slug: '/video', title: 'Video Overview' },
];

/**
 * Layout component providing a sidebar, search bar, download link and
 * next/previous navigation. Wrap your pages with this component to get
 * consistent UI across the documentation site.
 */
export default function Layout({ children }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const handleDownloadDocs = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Serialize the current document so the download reflects what is on screen.
    const pageMarkup = document.documentElement.outerHTML;
    const blob = new Blob([pageMarkup], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'esker-docs.html';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, []);

  // Filter pages based on the search query. Case-insensitive matching
  // against the page title or slug.
  const filteredPages = pages.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.slug.replace('/', '').toLowerCase().includes(q)
    );
  });

  // Determine index of current page for next/previous navigation.
  const currentIndex = pages.findIndex((p) => p.slug === router.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="w-full sm:w-64 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Esker</h2>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <nav>
          <ul>
            {filteredPages.map((p) => (
              <li key={p.slug} className="mb-2">
                <Link href={p.slug} className="block">
                  <span
                    className={`${
                      router.pathname === p.slug
                        ? 'text-blue-600 font-bold'
                        : 'text-gray-700'
                    }`}
                  >
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Download link */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleDownloadDocs}
            className="flex items-center text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <img
              src="/images/download-icon.svg"
              alt=""
              aria-hidden="true"
              className="w-5 h-5 mr-2"
            />
            <span>Download Docs</span>
          </button>
        </div>
      </aside>
      {/* Content area */}
      <main className="flex-1 p-6 sm:p-8">
        {children}
        {/* Next/Previous navigation */}
        <div className="mt-12 flex justify-between text-sm">
          {prevPage ? (
            <Link href={prevPage.slug} className="text-blue-600 hover:underline">
              &larr; {prevPage.title}
            </Link>
          ) : (
            <div />
          )}
          {nextPage ? (
            <Link href={nextPage.slug} className="text-blue-600 hover:underline">
              {nextPage.title} &rarr;
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
