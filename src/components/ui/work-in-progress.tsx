import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type WorkInProgressAction =
  | {
      label: string;
      to: string;
      variant?: "default" | "outline" | "ghost" | "secondary" | "hero" | "glass" | "outline-white";
      external?: boolean;
    }
  | {
      label: string;
      onClick: () => void;
      variant?: "default" | "outline" | "ghost" | "secondary" | "hero" | "glass" | "outline-white";
    };

type WorkInProgressProps = {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: WorkInProgressAction[];
  className?: string;
  children?: PropsWithChildren["children"];
};

type LinkAction = Extract<WorkInProgressAction, { to: string }>;
type CallbackAction = Extract<WorkInProgressAction, { onClick: () => void }>;

const isLink = (action: WorkInProgressAction): action is LinkAction => "to" in action;
const isCallback = (action: WorkInProgressAction): action is CallbackAction => "onClick" in action;

export const WorkInProgress = ({
  title,
  subtitle,
  description,
  actions = [],
  className,
  children,
}: WorkInProgressProps) => {
  return (
    <div className={cn("min-h-[70vh] bg-gradient-subtle flex items-center justify-center px-4 py-24", className)}>
      <div className="max-w-3xl w-full mx-auto">
        <motion.div
          className="relative bg-background border border-border rounded-3xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 pointer-events-none" />
          <div className="relative p-10 md:p-14 text-center space-y-8">
            <motion.div
              className="flex flex-col items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {subtitle && <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-4">{subtitle}</p>}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
                {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
              </motion.div>

              <motion.div
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="w-full h-2 rounded-full bg-muted/70 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary/60 rounded-full"
                    animate={{ x: ["-50%", "100%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                    style={{ width: "50%" }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">We’re polishing this experience. Thanks for your patience!</p>
              </motion.div>
            </motion.div>

            {children}

            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {actions.map((action, index) => {
                  const variant = action.variant ?? (index === 0 ? "hero" : "outline");

                  if (isLink(action)) {
                    if (action.external) {
                      return (
                        <Button key={action.label} variant={variant} asChild>
                          <a href={action.to} target="_blank" rel="noopener noreferrer">
                            {action.label}
                          </a>
                        </Button>
                      );
                    }
                    return (
                      <Button key={action.label} variant={variant} asChild>
                        <Link to={action.to}>{action.label}</Link>
                      </Button>
                    );
                  }

                  if (isCallback(action)) {
                    return (
                      <Button key={action.label} variant={variant} onClick={action.onClick}>
                        {action.label}
                      </Button>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkInProgress;

