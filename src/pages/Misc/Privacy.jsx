import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 p-8 bg-white">
      <h2 className="text-3xl text-center font-bold mb-6">Privacy Policy</h2>

      <p className="text-gray-700 leading-relaxed">
        This Privacy Policy explains how our blog collects, uses, and protects
        the personal information you provide while using our website.
      </p>

      <h3 className="text-2xl font-bold mt-6">Information We Collect</h3>
      <p className="text-gray-700 leading-relaxed">
        We collect personal information such as your name and email address when
        you sign up for an account or subscribe to our newsletter. Additionally,
        we may collect information about your usage of our website through
        cookies and similar technologies.
      </p>

      <h3 className="text-2xl font-bold mt-6">How We Use Your Information</h3>
      <p className="text-gray-700 leading-relaxed">
        We use the information we collect to personalize your experience,
        improve our website, send you updates and newsletters, and respond to
        your inquiries. We do not sell or share your personal information with
        third parties for marketing purposes.
      </p>

      <h3 className="text-2xl font-bold mt-6">Cookies</h3>
      <p className="text-gray-700 leading-relaxed">
        Cookies are small files that are stored on your device to improve your
        experience on our website. You can choose to disable cookies in your
        browser settings, but this may affect the functionality of our site.
      </p>

      <h3 className="text-2xl font-bold mt-6">Security</h3>
      <p className="text-gray-700 leading-relaxed">
        We take appropriate measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. However,
        please be aware that no internet transmission is completely secure, and
        we cannot guarantee the security of your data.
      </p>

      <h3 className="text-2xl font-bold mt-6">
        Changes to This Privacy Policy
      </h3>
      <p className="text-gray-700 leading-relaxed">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the date of the last update will be indicated
        at the top of the policy.
      </p>

      <p className="text-gray-700 leading-relaxed mt-8">
        If you have any questions or concerns about our Privacy Policy, please
        contact us at{" "}
        <span className="font-semibold">privacy@phreddy.com</span>.
      </p>
    </div>
  );
};

export default Privacy;
