"use client"

import { Progress } from "@/components/ui/progress"
import { useWizard } from "./wizard-context"

const STEP_LABELS = {
  1: "Your Location & Case",
  2: "What Happened",
  3: "About You",
  4: "Contact & Consent",
} as const

export function WizardProgress() {
  const { currentStep } = useWizard()
  const progressValue = (currentStep / 4) * 100
  const stepLabel = STEP_LABELS[currentStep as keyof typeof STEP_LABELS]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{stepLabel}</p>
        <p className="text-sm">Step {currentStep} of 4</p>
      </div>
      <Progress value={progressValue} />
    </div>
  )
}
