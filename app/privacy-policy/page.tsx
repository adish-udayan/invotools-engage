import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Privacy Policy - Invotools Engage',
  description: 'Privacy Policy for Invotools Engage',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:px-10 lg:px-14 xl:px-16">
        <h1 className="mb-2 font-serif text-4xl font-bold text-[#0b1d35] lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-base text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-sm prose-blue max-w-none text-gray-700 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0b1d35] [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:text-[#0b1d35] [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:mb-2 [&_ul]:mb-4 [&_ul]:ml-6 [&_table]:mb-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#0b1d35] [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2">
          <p>
            We at InvoTools prioritize Your privacy and are committed to safeguarding the security of Your Personal Data. This privacy policy explains how InvoTools or any of its affiliates or subsidiaries processes data collected from natural persons as specified in clause 2 below, as a Controller. It is imperative that You read this Policy to understand how We collect, use, disclose, and safeguard Your Personal Data in accordance with applicable data protection laws.
          </p>

          <h2>1. Definitions</h2>
          <p>Capitalised terms not specifically defined herein shall have the meaning ascribed thereto in the Agreement.</p>

          <h3>1.1 "Controller"</h3>
          <p>means the natural or legal person, public authority, agency, or other body which alone or jointly with others determines the purposes and means of the processing of Personal Data.</p>

          <h3>1.2 "Customer"</h3>
          <p>means the natural or legal person that has subscribed to the Services by executing the Agreement.</p>

          <h3>1.3 "Personal Data"</h3>
          <p>means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</p>

          <h3>1.4 "Processor"</h3>
          <p>means a natural or legal person, public authority, agency, or other body which processes Personal Data on behalf of the Controller.</p>

          <h3>1.5 "Subscription Agreement"</h3>
          <p>shall mean any agreement entered into between InvoTools and its Customer for subscription to its Services.</p>

          <h2>2. How we collect, use and share your personal data</h2>

          <h3>2.1 Personal Data that you provide us</h3>
          <p>When You provide us with information directly, we collect and use it as follows:</p>

          <ul>
            <li><strong>Individual who subscribes to Services:</strong> We collect your contact information (name, email, phone number) and employment information (job title, department, seniority). We use this to create your account, verify your identity, help you log in, communicate about the Services, send updates about our products, and customize your experience. We share this with third-party applications that assist us in account creation, notifications, and information delivery.</li>

            <li><strong>Users providing feedback:</strong> Information you provide through surveys, feedback, or when contacting us is used to improve our Services, send you marketing messages, and respond to your queries. We share this with third parties who assist us.</li>

            <li><strong>Website form submissions:</strong> Information you submit through web forms is used to respond to your queries and send marketing messages. We share this with assisting third parties.</li>

            <li><strong>Customer support requests:</strong> We collect your name, email, and phone number to respond to your support requests. This is shared with third parties assisting us.</li>

            <li><strong>Job applicants:</strong> We collect your name, email, phone number, education, and employment history to evaluate you for positions. We share this with third parties for reference checks and background verification.</li>

            <li><strong>Demo requesters:</strong> We collect your name, email, and phone number to provide demos and market our Services. We share this with assisting third parties.</li>
          </ul>

          <h3>2.2 Personal Data that we collect not provided directly by you</h3>
          <p>We also collect data about you that you don't directly provide:</p>

          <ul>
            <li><strong>Website visitors:</strong> We collect IP addresses, operating system and browser information, and session activity (page views, time spent, scrolling, event data) through first-party tracking. We use this for market analysis, data security, and to promote our Services. We share this with third parties providing services.</li>

            <li><strong>Service users:</strong> We collect name, email, and phone number needed for third-party integrations. We use this to develop, improve, and operate our Services with third-party inter-operation. We share this with assisting third parties.</li>

            <li><strong>Information from third-party sources:</strong> We may collect information from valid third-party agreements and public platforms (name, email, phone, designation, company information) to create tailored advertising and provide relevant Services. We share this with partner third parties.</li>

            <li><strong>Third-party sign-on users:</strong> When you register using third-party sign-on services, we collect publicly available information from those platforms. We use this for account creation, identity verification, login assistance, and to send you product updates and marketing information. We share this with third-party applications assisting us.</li>
          </ul>

          <h3>2.3 Authority to Provide Data</h3>
          <p>If You provide Us with any Personal Data relating to other individuals, You represent that You have the authority to do so, and where required, have obtained the necessary consent. If You believe that Your Personal Data has been provided to Us improperly, please contact Us using the information in clause 11 below.</p>

          <h3>2.4 Additional Sharing</h3>
          <p>In addition to the details provided above, We may also share Your Personal Data with:</p>
          <ul>
            <li>An entity to which we divest all or a portion of Our business, or otherwise in connection with a merger, consolidation, change in control, reorganisation or liquidation</li>
            <li>Law enforcement authorities, government authorities, courts, dispute resolution bodies, regulators, auditors, and any party appointed or requested by applicable regulators</li>
            <li>Professional advisors who advise and assist Us in enforcing Our contracts, handling claims, managing Our company, and handling disputes</li>
          </ul>

          <h2>3. Legal Basis For Processing</h2>

          <h3>3.1 EEA REGION</h3>
          <p>If You are a data subject from the European Economic Area, Our legal basis for collecting and using the Personal Data described above will depend on the Personal Data concerned and the specific context in which We collect it. We will normally collect Personal Data from You only where it is needed to perform a contract with You, where the processing is in Our legitimate interests and not overridden by Your data protection interests or fundamental rights and freedoms, or where We have Your consent. In some cases, We may also have a legal obligation to collect Personal Data from You. If We process Personal Data with reliance on Your consent, You may withdraw Your consent at any time.</p>

          <h3>3.2 INDIA</h3>
          <p>If You are a data principal from India, Our legal basis for collecting and using the Personal Data described above will depend on the Personal Data concerned and the specific context in which We collect it. We will normally collect Personal Data from You only where it is needed to perform a contract with You, where the processing is in Our legitimate interests and not overridden by Your data protection interests or fundamental rights and freedoms, or where We have Your consent. In some cases, We may also have a legal obligation to collect Personal Data from You. If We process Personal Data with reliance on Your consent, You may withdraw Your consent at any time.</p>

          <h2>4. International Transfer</h2>

          <h3>4.1 Data Processing Regions</h3>
          <p>We mainly process Personal Data in the relevant regions. However, We may transfer Personal Data outside these regions only for the purposes referred to in clause 2. We will ensure that the recipient of Your Personal Data offers an adequate level of protection that is at least comparable to that which is provided under applicable data protection laws.</p>

          <h3>4.2 EEA Transfers</h3>
          <p>If You are a resident of the European Economic Area and when Your Personal Data is processed outside EEA, We will ensure that the recipient of Your Personal Data offers an adequate level of protection, for instance by entering into standard contractual clauses for the transfer of Personal Data as approved by the European Commission (Article 46 General Data Protection Regulation, 2016), or We will ask You for Your prior consent to such international data transfers.</p>

          <h3>4.3 India Transfers</h3>
          <p>If You are a resident of India, and where We intend to process Your Personal Data outside India, We will ensure that We do not transfer the Personal Data to any country that is notified as restricted by any applicable regulations or the Government of India from time to time.</p>

          <h2>5. Security Of Personal Data</h2>
          <p>We use appropriate technical and organizational measures to protect the Personal Data that We collect and process. The measures We use are designed to provide a level of security appropriate to the risk of processing Your Personal Data. If You have questions about the security of Your Personal Data, please contact Us using the contact details provided under clause 11 below.</p>

          <h2>6. Retention Of Personal Data</h2>

          <h3>6.1 Retention Criteria</h3>
          <p>We retain Personal Data collected where an ongoing legitimate business requires retention of such Personal Data and where We are required under applicable laws to retain Personal Data.</p>

          <h3>6.2 Deletion or Aggregation</h3>
          <p>In the absence of a need to retain Personal Data under clause 6.1 above, We will either delete it or aggregate it or, if this is not possible then We will securely store Your Personal Data and isolate it from any further processing until deletion is possible.</p>

          <h2>7. Your Rights</h2>
          <p>You are entitled to the following rights:</p>

          <h3>7.1 Access and Correction</h3>
          <p>You can request Us for access and correction of Your Personal Data.</p>

          <h3>7.2 Withdraw Consent</h3>
          <p>If We have collected and processed Your Personal Data with Your consent, then You can withdraw Your consent at any time. Withdrawing Your consent will not affect the lawfulness of any processing We have conducted prior to Your withdrawal, nor will it affect processing of Your Personal Data conducted in reliance on lawful processing grounds other than consent.</p>

          <h3>7.3 Data Protection Authority Complaint</h3>
          <p>You have the right to complain to a data protection authority about Our collection and use of Your Personal Data. For more information, please contact Your local data protection authority as specified by the applicable data protection laws.</p>

          <h3>7.4 Marketing Communications</h3>
          <p>You have the right to opt out of marketing communications We send You at any time. You can exercise this right by clicking on the "unsubscribe" or "opt-out" link in the marketing e-mails We send You.</p>

          <h3>7.5 EEA, UK, and Switzerland Rights</h3>
          <p>If You are a resident of the EEA, UK, or Switzerland, You are also entitled to:</p>
          <ul>
            <li>Request deletion and erasure of Your Personal Data</li>
            <li>Object to the processing of Your Personal Data</li>
            <li>Ask Us to restrict the processing of Your Personal Data</li>
            <li>Request portability of Your Personal Data</li>
          </ul>

          <h3>7.6 India Rights</h3>
          <p>If You are a resident of India, You are also entitled to:</p>
          <ul>
            <li>Request deletion and erasure of Your Personal Data</li>
            <li>Nominate any other individual, who shall, in the event of Your death or incapacity, be allowed to exercise Your rights as prescribed under the Digital Personal Data Protection Act, 2023</li>
            <li>Provide, manage, review or withdraw Your consent through a consent manager</li>
            <li>Register any grievance You may have in respect of Our collection and use of Your Personal Data</li>
          </ul>

          <h3>7.7 Exercising Your Rights</h3>
          <p>If You seek to exercise Your rights under this clause, please contact Us at the details provided in clause 11. We will verify any requests before acting on the request and respond to all requests We receive from individuals wishing to exercise their data protection rights within a reasonable timeframe in accordance with applicable data protection laws.</p>

          <h2>8. Privacy of Children</h2>
          <p>We recognize the importance of children's safety and privacy. Our Services is not intended for usage by children under the age of 18. We do not request, or knowingly collect, any Personal Data from children under the age of 18. If a parent or guardian becomes aware that his or her child has provided Us with Personal Data, they should write to Us at the email address provided in clause 11.</p>

          <h2 id="cookie-policy">9. Cookie Policy</h2>

          <h3>9.1 Cookie Usage</h3>
          <p>Cookies are text files that are placed on Your computer to collect standard internet log information and visitor behaviour information by Us. When You visit the Website(s), We may collect Personal Data automatically from You through cookies or similar technology. We also set cookies to collect information that is used either in aggregate form to help Us understand how Our Website(s) is being used or how effective Our marketing campaigns are, to help customise the Website(s) for You or to make advertising messages more relevant to You.</p>

          <h3>9.2 Necessary Cookies</h3>
          <p>We set essential cookies that enable core functionality such as security, network management, and accessibility. You may not opt-out of these cookies. However, You may disable these by changing Your browser settings, but this may affect how the Website(s) functions.</p>

          <h3>9.3 Statistics, Preference, and Marketing Cookies</h3>
          <p>We set these cookies to help Us improve Our Website(s) by collecting and reporting information on how You use it. The cookies collect information in a way that does not directly identify anyone.</p>

          <h3>9.4 Cookie Banner</h3>
          <p>When You visit the Website(s), a cookie banner will be displayed providing additional information about cookies and options to opt out of non-essential cookies as required by applicable laws.</p>

          <h2>10. Notice to End-User and other Exclusions</h2>

          <h3>10.1 Customer Data</h3>
          <p>Our Services is intended for use by businesses. This Policy is not applicable to Our processing of any Personal Data forming a part of the Customer Data. We may receive End-Users' Personal Data as a part of the Customer Data for which We will only act as a Processor and such processing will be governed by the Subscription Agreement. In such a case, the End-User's data privacy questions and requests should be submitted to the Customer in its capacity as a Controller. We are not responsible for Customers' privacy or security practices which may be different from this notice. Customers are solely responsible for establishing policies for and ensuring compliance with all applicable laws and regulations, or other obligations for transmission of Customer Data in the use of Services.</p>

          <h3>10.2 Third-Party Websites</h3>
          <p>Our Website(s) may contain links to other Websites. Our Policy applies only to Our Website(s), so if You click on a link to another Website, You should read their privacy policy. We encourage You to review the privacy statements of any such other Websites to understand their Personal Data practices.</p>

          <h2>11. Contact Information</h2>
          <p>You may contact Us if You have any inquiries or feedback on Our data protection policies and procedures, or if You wish to make any request, in the following manner:</p>

          <div className="rounded-lg bg-gray-50 p-6">
            <p className="font-semibold">Attention: Legal Department</p>
            <p>
              InvoTools LTD.<br />
              128, City Road<br />
              London, EC1V 2NX<br />
              United Kingdom
            </p>
          </div>

          <h2>12. Changes to the Policy</h2>
          <p>We keep this Policy under regular review and may update this webpage at any time. This Policy may be amended at any time, and You shall be notified only if there are material changes to this Policy.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
