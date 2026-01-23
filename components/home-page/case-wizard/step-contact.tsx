"use client"

import { useWizard } from "./wizard-context"
import { FieldGroup, Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function StepContact() {
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
