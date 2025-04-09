import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({
  className,
}: Readonly<React.HTMLAttributes<HTMLElement>>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-center gap-6 mt-10 py-10 md:h-32">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Christian Mbah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
