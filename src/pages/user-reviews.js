import Layout from '../components/Layout';
import Image from 'next/image';

/**
 * User Reviews page. Incorporates feedback from real users on the value of
 * process automation. The structure mirrors the user-review-beta site and
 * leverages locally stored images generated for this project.
 */
export default function UserReviews() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">User Reviews for Process Automation</h1>

      <section className="mb-10">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Image
            src="/images/ghibli-library.png"
            alt="ghibli library"
            width={220}
            height={240}
            className="rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-1">Awesome! Time Saver</h2>
            <p>
              A top‑notch business process automation that’ll save you time and
              effort in the long run. The documentation is incredibly
              comprehensive with detailed explanations. It has achieved
              significant cost savings and greatly increased productivity by
              drastically reducing processing time per invoice. <em>Ivy Chai</em>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Image
            src="/images/ghibli-productivity-increase.png"
            alt="ghibli productivity increase"
            width={290}
            height={310}
            className="rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-1">Value Add</h2>
            <p>
              I’m thoroughly impressed with the ‘Esker pending payment
              documentation’ and automated process workflows. It’s an awesome
              process automation that’s saved me hours of manual work and
              allowed me to focus on value‑added tasks. <em>Chloe Chong</em>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-2xl font-semibold mb-1">Key benefits of automating processes for invoice processing?</h2>
          <p>
            The combination of invoice processing solutions like Esker / CDAS
            and Python automation offers several key benefits. These include
            optimising efficiency by eliminating manual data entry through
            autonomous browser interactions and intelligent automation
            frameworks. Accuracy is improved through advanced data
            pre‑processing, validation mechanisms, and context‑aware
            understanding of the user interface. Scalability is achieved
            through iterative batch processing of multiple invoices.
          </p>
        </div>
      </section>
    </Layout>
  );
}