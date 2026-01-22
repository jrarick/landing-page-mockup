export interface WizardFormData {
  // Step 1
  zipCode: string
  caseType: string
  // Step 2
  description: string
  // Step 3
  firstName: string
  lastName: string
  // Step 4
  phone: string
  email: string
  consent: boolean
}

export interface WizardErrors {
  zipCode?: string
  caseType?: string
  description?: string
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  consent?: string
}

export interface WizardContextType {
  currentStep: number
  formData: WizardFormData
  errors: WizardErrors
  isSubmitted: boolean
  updateField: <K extends keyof WizardFormData>(
    field: K,
    value: WizardFormData[K]
  ) => void
  validateStep: () => boolean
  submitForm: () => void
  nextStep: () => void
  prevStep: () => void
}

export const CASE_TYPES = [
  "Personal Injury",
  "Birth Injury",
  "Wrongful Death",
  "Sexual Abuse",
  "Slip and Fall Accidents",
  "Car Accidents",
  "Workers Compensation",
  "Medical Malpractice",
] as const

export type CaseType = (typeof CASE_TYPES)[number]
