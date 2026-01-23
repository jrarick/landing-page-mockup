"use client"

import { useWizard } from "./wizard-context"
import { FieldGroup, Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

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
