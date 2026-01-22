"use client"

import { Button } from "@/components/ui/button"
import { useWizard } from "./wizard-context"

export function WizardNavigation() {
  const { currentStep, prevStep, nextStep, submitForm } = useWizard()

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      {currentStep > 1 ? (
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={prevStep}
          className="border-black text-black"
        >
          Back
        </Button>
      ) : (
        <div />
      )}

      {currentStep < 4 ? (
        <Button type="button" size="lg" onClick={nextStep}>
          Next
        </Button>
      ) : (
        <Button type="button" size="lg" onClick={submitForm}>
          Get Help Now!
        </Button>
      )}
    </div>
  )
}
