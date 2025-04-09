"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarPlus, Github, Linkedin, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function LetsConnectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm shadow-lg transition-all duration-300 transform hover:scale-[1.02] mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <User
            className={`w-12 h-12 transition-colors duration-300 ${
              isHovered ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Let’s Connect
        </h2>
        <p className="mt-2 mb-6 text-muted-foreground text-sm">
          Reach out via email or connect with me on GitHub or LinkedIn.
        </p>
        <div className="flex gap-6 justify-center mb-6">
          <a
            href="mailto:mbahchris46@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/chrismbah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/mbah-chris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href="https://calendly.com/mbahchris46"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <span className="mr-2">Book a Meeting</span>
          <CalendarPlus className="w-5 h-5" />
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-primary to-primary transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </Card>
  );
}
