"use client"

import { Progress } from "@/components/ui/progress"
import { useWizard } from "./wizard-context"
import { Field, FieldLabel } from "@/components/ui/field"

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
    <Field className="space-y-2">
      <FieldLabel
        className="flex items-center justify-between"
        htmlFor="form-progress"
      >
        <span className="text-sm font-bold">{stepLabel}</span>
        <span className="text-sm">Step {currentStep} of 4</span>
      </FieldLabel>
      <Progress
        value={progressValue}
        id="form-progress"
        aria-label="Form Progress"
      />
    </Field>
  )
}
