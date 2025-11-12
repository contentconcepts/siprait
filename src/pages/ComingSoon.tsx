import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WorkInProgress } from "@/components/ui/work-in-progress";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <WorkInProgress
          title="Coming Soon"
          subtitle="Exciting things are on the way"
          description="We’re crafting something special for you. Check back shortly or head home to explore everything else we’ve built."
          actions={[
            {
              label: "Return Home",
              to: "/",
              variant: "hero",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;

