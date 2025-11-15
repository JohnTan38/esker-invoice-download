import Layout from '../components/Layout';
import Card from '../components/Card';

/**
 * App features page. Describes the business process automation benefits and
 * provides quick links to learn more about Esker and listen to an audio
 * overview of automated invoice processing. The content is adapted from
 * the original documentation (test.mdx).
 */
export default function AppFeatures() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">App Features</h1>
      <h2 className="text-2xl font-semibold mb-2">Business Process Automation</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>
          <strong>Significant Cost Reduction</strong>, Optimised Resource
          Utilisation
        </li>
        <li>
          Improved Accuracy, <strong>Consistent Output Quality</strong>
        </li>
        <li>
          <strong>Eliminate Repetitive Tasks</strong>, Faster Process Execution
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">More references</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title="About Esker"
          href="https://videos.esker.com/watch/NmNPjCYkkURwXVPEsBbEGQ?"
        />
        <Card
          title="Listen Audio Summary"
          href="https://raw.githubusercontent.com/JohnTan38/pending-payment-documentation/master/public/automated_invoice_processing_efficiency_accuracy_and_scalability.wav"
        />
      </div>
    </Layout>
  );
}