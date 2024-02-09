import React from "react";
import Card from "./components/Pricecard";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      isUser: 1,
      storage: "50GB Storage",
      isStorage: 1,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: 1,
      communityAccess: "Community Access",
      isCommunityAccess: 1,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: 0,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: 0,
      subDomain: "Free Subdomain",
      isSubDomain: 0,
      reports: "Monthly Status Reports",
      isReports: 0,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      isUser: 1,
      storage: "50GB Storage",
      isStorage: 1,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: 1,
      communityAccess: "Community Access",
      isCommunityAccess: 1,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: 1,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: 1,
      subDomain: "Free Subdomain",
      isSubDomain: 1,
      reports: "Monthly Status Reports",
      isReports: 0,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      isUser: 1,
      storage: "50GB Storage",
      isStorage: 1,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: 1,
      communityAccess: "Community Access",
      isCommunityAccess: 1,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: 1,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: 1,
      subDomain: "Free Subdomains",
      isSubDomain: 1,
      reports: "Monthly Status Reports",
      isReports: 1,
    },
  ];
  return (
    <>
      <section className="plan py-5">
        <div className="container">
          <div className="row">
            {data.map((feature, flag) => {
              return <Card data={feature} key={flag} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
