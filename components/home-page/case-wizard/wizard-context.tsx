"use client"

import { createContext, useContext, useState, useCallback } from "react"
import type { WizardContextType, WizardFormData, WizardErrors } from "./types"

type Step = 1 | 2 | 3 | 4

const initialFormData: WizardFormData = {
  zipCode: "",
  caseType: "",
  description: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  consent: false,
}

const WizardContext = createContext<WizardContextType | null>(null)

export function useWizard() {
  const context = useContext(WizardContext)
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider")
  }
  return context
}

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<WizardFormData>(initialFormData)
  const [errors, setErrors] = useState<WizardErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = useCallback(
    <K extends keyof WizardFormData>(field: K, value: WizardFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    []
  )

  const validateStep = useCallback((): boolean => {
    const newErrors: WizardErrors = {}

    switch (currentStep) {
      case 1:
        if (!formData.zipCode.trim()) {
          newErrors.zipCode = "Zip code is required"
        } else if (!/^\d{5}$/.test(formData.zipCode.trim())) {
          newErrors.zipCode = "Please enter a valid 5-digit zip code"
        }
        if (!formData.caseType) {
          newErrors.caseType = "Please select a case type"
        }
        break

      case 2:
        // Description is optional, no validation needed
        break

      case 3:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "First name is required"
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "Last name is required"
        }
        break

      case 4:
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required"
        } else {
          const digitsOnly = formData.phone.replace(/\D/g, "")
          if (digitsOnly.length < 10) {
            newErrors.phone = "Please enter a valid phone number (10+ digits)"
          }
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
          newErrors.email = "Please enter a valid email address"
        }
        if (!formData.consent) {
          newErrors.consent =
            "You need to agree with the TOS and Privacy Policy"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [currentStep, formData])

  const nextStep = useCallback(() => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as Step)
    }
  }, [validateStep])

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as Step)
  }, [])

  const submitForm = useCallback(() => {
    if (validateStep()) {
      // In a real app, you would submit the form data to an API here
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }, [validateStep, formData])

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        formData,
        errors,
        isSubmitted,
        updateField,
        validateStep,
        submitForm,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}
