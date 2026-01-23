"use client"

import { useWizard } from "./wizard-context"
import { FieldGroup, Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { CASE_TYPES } from "./types"

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
