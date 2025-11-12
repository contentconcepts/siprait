import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WorkInProgress } from "@/components/ui/work-in-progress";

const CareersJobs = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <WorkInProgress
          title="Career Opportunities"
          subtitle="Job postings coming up soon"
          description="We’re putting the finishing touches on our open roles and application experience. Check back shortly for the latest opportunities or drop us a note so we can reach out once positions go live."
          actions={[
            {
              label: "Go Back",
              to: "/careers",
              variant: "outline",
            },
            {
              label: "Contact Us",
              to: "/contact",
              variant: "hero",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CareersJobs;
