import Layout from '../components/Layout';
import Card from '../components/Card';

/**
 * Automate OnDemand page. Provides a strategic rationale for automating
 * business processes and highlights the benefits of using rule-based
 * execution with large language models. Adapted from test_1.mdx.
 */
export default function AutomateOnDemand() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Automate OnDemand</h1>
      <h2 className="text-2xl font-semibold mb-2">Strategic Business Rationale</h2>
      <div className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-mono text-sm text-gray-700">
          {/* Code block style placeholder */}
          Advantages of Workflow Automation
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-2">Optimising Efficiency, Accuracy, and Scalability</h3>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>
          <strong>Scalable</strong> and extensible solutions
        </li>
        <li>
          <strong>Leveraging cutting‑edge automation and AI‑driven technologies</strong>
        </li>
        <li>
          Optimised operational workflows
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Rule‑Based Execution</h3>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>
          Integration of large language models (LLMs) within Python‑based workflows
        </li>
        <li>
          Predefined business rules drive <strong>precise automation</strong> of mouse clicks and keyboard inputs
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">References</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title="Quickstart User Guide"
          href="https://esker-automation-guide-git-master-johntan38s-projects.vercel.app/"
        />
        <Card
          title="Listen Audio Summary"
          href="https://raw.githubusercontent.com/JohnTan38/pending-payment-documentation/master/public/automated_invoice_processing_efficiency_accuracy_and_scalability.wav"
        />
      </div>
    </Layout>
  );
}