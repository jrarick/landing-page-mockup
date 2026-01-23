"use client"

import { useWizard } from "./wizard-context"
import { FieldGroup, Field } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function StepIncident() {
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
