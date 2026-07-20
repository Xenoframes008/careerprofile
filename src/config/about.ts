import { Building2, Compass, Target, UserRound } from "lucide-react";
import type { IconCardData } from "@/types";

/** Four premium About cards — short enough to scan in seconds. */
export const aboutCards: IconCardData[] = [
  {
    icon: UserRound,
    title: "Who I Am",
    description:
      "Senior Software QA Engineer based in Dublin. Five years from game QA at Ubisoft to leading enterprise quality delivery at Expleo. ISTQB® Certified.",
  },
  {
    icon: Target,
    title: "What I Specialise In",
    description:
      "Manual testing, test automation, SQL validation, REST API testing and Playwright — focused on release-ready enterprise quality.",
  },
  {
    icon: Building2,
    title: "Industries I've Worked In",
    description:
      "Workforce management, enterprise platforms, consulting delivery and game QA — across Ireland and international markets.",
  },
  {
    icon: Compass,
    title: "How I Approach Quality",
    description:
      "Quality is collaboration, not a late gate. Automate the repeatable, think through the risky, and treat every defect as a learning loop.",
  },
];
