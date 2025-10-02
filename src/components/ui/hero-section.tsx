"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import aiBg from "@/assets/hero-bg.jpg";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: ReactNode;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({ badge, title, description, actions, image }: HeroProps) {
  return (
    <section
      className={cn(
        "relative text-white",
        "py-6 sm:py-10 md:py-12 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aiBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
      </div>

      <div className="mx-auto flex max-w-container flex-col gap-6 pt-6 sm:gap-10">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          <h1 className="relative z-10 inline-block animate-appear text-3xl font-semibold leading-tight drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight text-white">
            {title}
          </h1>

          <p className="text-md relative z-10 max-w-[700px] animate-appear font-medium text-white/90 opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-6 opacity-0 delay-300">
            {actions.map((action, index) => {
              const buttonClasses = action.variant === "glass" 
                ? "text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm"
                : action.variant === "outline-white"
                ? "text-xl font-semibold px-8 py-4 border-2 border-white/40"
                : "";
              
              return (
                <Button key={index} variant={action.variant} size="xl" className={buttonClasses} asChild>
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Subtle bottom gradient divider to distinguish sections */}
          <div className="pointer-events-none h-24 w-full opacity-40" aria-hidden="true">
            <div className="h-full w-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))" }} />
          </div>
        </div>
      </div>
    </section>
  );
}


