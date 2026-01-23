"use client"

import { WizardProvider, useWizard } from "./wizard-context"
import { WizardProgress } from "./wizard-progress"
import { WizardNavigation } from "./wizard-navigation"
import { CheckCircle2Icon } from "lucide-react"
import { StepLocation } from "./step-location"
import { StepIncident } from "./step-incident"
import { StepPersonal } from "./step-personal"
import { StepContact } from "./step-contact"

function SuccessMessage() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center justify-center py-8 text-center">
      <CheckCircle2Icon className="mb-4 size-16 text-green-600" />
      <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
      <p className="text-gray-600">
        Your case inquiry has been received. One of our attorneys will contact
        you shortly to discuss your case.
      </p>
    </div>
  )
}

function WizardContent() {
  const { currentStep, isSubmitted } = useWizard()

  if (isSubmitted) {
    return <SuccessMessage />
  }

  return (
    <div className="space-y-6">
      <WizardProgress />

      <div className="min-h-50">
        {currentStep === 1 && <StepLocation />}
        {currentStep === 2 && <StepIncident />}
        {currentStep === 3 && <StepPersonal />}
        {currentStep === 4 && <StepContact />}
      </div>

      <WizardNavigation />
    </div>
  )
}

export function CaseWizard() {
  return (
    <WizardProvider>
      <WizardContent />
    </WizardProvider>
  )
}
