"use client";

import { testTemplateQuest } from "@/testContent/templateQuest/templateQuest";
import { CreateQuest } from "@/components/reusableComponent/CreateQuest/CreateQuest";

export interface Components {
  component: (onClick: () => void, key: number) => JSX.Element;
  isAllowed: boolean;
}

export default function Home(): JSX.Element {
  return (
    <main className="page">
      <CreateQuest quest={testTemplateQuest} />
    </main>
  );
}
