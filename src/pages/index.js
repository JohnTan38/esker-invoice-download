import { useCallback } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Image from 'next/image';

/**
 * Home page of the documentation site. Presents an overview of the
 * Esker invoice download automation workflow with a gradient heading,
 * architectural diagram, and quick links to a summary and video.
 */
export default function Home() {
  const handleDownloadDocs = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Capture the rendered markup so users can archive the doc they are viewing.
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

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
        Esker Invoice Download Automation
      </h1>
      <p className="mb-6 text-lg">
        Welcome to the Esker Invoice Download App!
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-2xl font-bold">Automated Workflow Architecture</h2>
        <button
          type="button"
          onClick={handleDownloadDocs}
          className="inline-flex items-center justify-center rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Download diagram
        </button>
      </div>
      <div className="mb-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="group relative overflow-hidden">
          <Image
            src="/images/diagram.JPG"
            alt="Automated workflow diagram"
            width={700}
            height={400}
            className="transition-transform duration-300 ease-out group-hover:scale-110"
            priority
          />
          <span className="sr-only">Hover to see an enlarged version of the diagram.</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title="Read summary"
          href="https://pending-payment-documentation-briefing.vercel.app/"
        />
        <Card
          title="Play Video"
          href="/video"
        />
      </div>
    </Layout>
  );
}
