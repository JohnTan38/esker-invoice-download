import Layout from '../components/Layout';

export default function VideoDemo() {
  return (
    <Layout>
      <h1 className="text-3xl font-extrabold mb-4">Intelligent Invoice Automation Demo</h1>
      <p className="mb-6 text-lg text-gray-700">
        Watch the end-to-end automation workflow below. Download the MP4 if your browser does not
        support inline playback.
      </p>
      <video
        className="w-full rounded-lg border border-gray-200 shadow-sm bg-black"
        controls
        playsInline
        preload="metadata"
        poster="/images/diagram.JPG"
      >
        <source
          src="/images/Intelligent_Invoice_Automation.mp4"
          type='video/mp4; codecs="avc1.640028, mp4a.40.2"'
        />
        Your browser does not support embedded videos. You can{' '}
        <a href="/images/Intelligent_Invoice_Automation.mp4" className="underline text-primary">
          download the demo
        </a>
        .
      </video>
    </Layout>
  );
}
