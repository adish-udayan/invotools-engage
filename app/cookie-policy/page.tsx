import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Cookie Policy - Invotools Engage',
  description: 'Cookie Policy for Invotools Engage',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:px-10 lg:px-14 xl:px-16">
        <h1 className="mb-2 font-serif text-4xl font-bold text-[#0b1d35] lg:text-5xl">
          Cookie Policy
        </h1>
        <p className="mb-12 text-base text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-sm prose-blue max-w-none text-gray-700 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0b1d35] [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:text-[#0b1d35] [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:mb-2 [&_ul]:mb-4 [&_ul]:ml-6 [&_table]:mb-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#0b1d35] [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2">
          <p>
            At InvoTools, we use cookies to enhance your experience, provide essential site features, and ensure our website works effectively.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They allow us to:
          </p>
          <ul>
            <li>Remember your settings and preferences</li>
            <li>Understand how you interact with our site</li>
            <li>Deliver content and ads that are relevant to you</li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          <p>We use different types of cookies to deliver various functionalities:</p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Consent Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential Cookies</td>
                  <td>Required for core functionality such as login, navigation, and security</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Performance Cookies</td>
                  <td>Measure and improve website performance and user experience</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Functionality Cookies</td>
                  <td>Store user preferences (e.g., language, display settings)</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Analytics Cookies</td>
                  <td>Track usage data through tools like Google Analytics</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Marketing Cookies</td>
                  <td>Enable personalised advertising and track campaign effectiveness</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services that set their own cookies, such as:
          </p>
          <ul>
            <li><strong>Google Analytics</strong> - for insights into website traffic and performance</li>
            <li><strong>Meta Pixel (Facebook Pixel)</strong> - for targeted advertising and campaign measurement</li>
            <li><strong>LinkedIn Insights Tag</strong> - for LinkedIn-based analytics and ads</li>
          </ul>
          <p>
            For details on how these services handle your data, please review their individual privacy policies.
          </p>

          <h2>Managing Your Cookie Preferences</h2>
          <p>
            You have full control over your cookie preferences. You can:
          </p>
          <ul>
            <li>Click the "Cookie Settings" link available in our website footer</li>
            <li>Adjust your browser settings to block, restrict, or delete cookies</li>
          </ul>
          <p className="mt-6 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
            <strong>Please note:</strong> Disabling certain cookies may limit some features and affect the overall functionality of the site.
          </p>

          <h2>Your Privacy Matters</h2>
          <p>
            Your trust is important to us. For more information on how we collect, use, and protect your personal data, please see our <a href="/privacy-policy" className="font-semibold text-[#0b1d35] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
