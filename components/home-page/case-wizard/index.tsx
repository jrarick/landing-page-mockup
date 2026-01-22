"use client"

import { WizardProvider, useWizard } from "./wizard-context"
import { WizardProgress } from "./wizard-progress"
import { WizardNavigation } from "./wizard-navigation"
import { CheckCircle2Icon } from "lucide-react"
import { FieldGroup, Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { CASE_TYPES } from "./types"
import { Checkbox } from "@/components/ui/checkbox"

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

function StepContact() {
  const { formData, errors, updateField } = useWizard()

  return (
    <FieldGroup>
      <Field data-invalid={!!errors.phone}>
        <Input
          id="phone"
          type="tel"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          aria-label="Phone Number"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <FieldError>{errors.phone}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.email}>
        <Input
          id="email"
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-label="Email Address"
          aria-invalid={!!errors.email}
        />
        {errors.email && <FieldError>{errors.email}</FieldError>}
      </Field>

      <Field orientation="horizontal" data-invalid={!!errors.consent}>
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            updateField("consent", checked === true)
          }
          aria-label="Confirm agreement to Terms of Service, Privacy Policy, and contact permissions"
          aria-invalid={!!errors.consent}
        />
        <div className="space-y-1">
          <label htmlFor="consent">
            <span className="text-xs/4">
              By checking this box, I confirm my agreement with the Terms of
              Service, including mandatory arbitration, and Privacy Policy and
              to be contacted by TopDog Law at the email I provided.
            </span>
          </label>
          {errors.consent && <FieldError>{errors.consent}</FieldError>}
        </div>
      </Field>
      <p className="text-xs/4">
        {`By filling out this form and pressing the "Get Help Now" button, I
        consent to receive automated and/or prerecorded calls and text messages
        from TopDog Law at the phone number I've provided, including mobile
        numbers. These messages might include details about legal services that
        may interest me. Message and data rates might apply, and message
        frequency may vary. I can revoke my consent any time by contacting
        TopDog Law or by replying "STOP" to any message, and can text HELP for
        assistance. This consent is not a prerequisite for getting a case
        evaluation or any legal services, and I can also reach TopDog Law for a
        case assessment by calling its toll-free number at +1 844-925-8111.`}
      </p>
    </FieldGroup>
  )
}

function StepIncident() {
  const { formData, updateField } = useWizard()

  return (
    <FieldGroup>
      <Field>
        <Textarea
          id="description"
          placeholder="What Happened?"
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          aria-label="Describe what happened"
          rows={4}
        />
      </Field>
    </FieldGroup>
  )
}

export function StepLocation() {
  const { formData, errors, updateField } = useWizard()

  return (
    <FieldGroup>
      <Field data-invalid={!!errors.zipCode}>
        <Input
          id="zipCode"
          inputMode="numeric"
          placeholder="Zip Code *"
          value={formData.zipCode}
          onChange={(e) => updateField("zipCode", e.target.value)}
          aria-label="Zip Code"
          aria-invalid={!!errors.zipCode}
        />
        {errors.zipCode && <FieldError>{errors.zipCode}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.caseType}>
        <NativeSelect
          id="caseType"
          value={formData.caseType}
          onChange={(e) => updateField("caseType", e.target.value)}
          aria-label="Case Type"
          aria-invalid={!!errors.caseType}
          className="w-full"
        >
          <NativeSelectOption value="">Select a case type *</NativeSelectOption>
          {CASE_TYPES.map((type) => (
            <NativeSelectOption key={type} value={type}>
              {type}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        {errors.caseType && <FieldError>{errors.caseType}</FieldError>}
      </Field>
    </FieldGroup>
  )
}

export function StepPersonal() {
  const { formData, errors, updateField } = useWizard()

  return (
    <FieldGroup>
      <Field data-invalid={!!errors.firstName}>
        <Input
          id="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          aria-label="First Name"
          aria-invalid={!!errors.firstName}
        />
        {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
      </Field>

      <Field data-invalid={!!errors.lastName}>
        <Input
          id="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          aria-label="Last Name"
          aria-invalid={!!errors.lastName}
        />
        {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
      </Field>
    </FieldGroup>
  )
}
