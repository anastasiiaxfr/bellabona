import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

function Form() {
  return (
    <form action="/" method="POST">
      <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="contact-name">Name*</FieldLabel>
          <Input
            id="contact-name"
            type="text"
            placeholder="Your Name"
            name="contact_name"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-company-name">Company Name</FieldLabel>
          <Input
            id="contact-company-name"
            type="text"
            placeholder="Company Name"
            name="contact_company_name"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>
      </FieldGroup>
      <div className="my-3">
        <Field>
          <FieldLabel htmlFor="contact-email">Email*</FieldLabel>
          <Input
            id="contact-email"
            type="email"
            placeholder="Email"
            name="contact_email"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>
      </div>
      <div className="my-3">
        <Field>
          <FieldLabel htmlFor="contact-tel">Phone Number*</FieldLabel>
          <Input
            id="contact-tel"
            type="tel"
            placeholder="Your Phone Number"
            name="contact_tel"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>
      </div>
      <div className="my-3">
        <Field>
          <FieldLabel htmlFor="contact-company-size">Company Size*</FieldLabel>
          <Input
            id="contact-company-size"
            type="number"
            placeholder="Please select"
            name="contact_company_size"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>
      </div>
      <div className="my-3">
        <Field>
          <FieldLabel htmlFor="contact-msg">Additional Comments</FieldLabel>
          <Textarea
            id="contact-msg"
            name="contact_message"
            className="bg-cstm-grey-1 border-cstm-grey-2 rounded"
          />
        </Field>
      </div>
      <div className="my-3">
        <FieldGroup className="mx-auto w-full">
          <Field orientation="horizontal">
            <Checkbox id="contact-terms" name="contact_terms" />
            <FieldLabel htmlFor="contact-terms">
              I agree to be contacted by Bella&Bona regarding this request.
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>
      <div className="mt-3">
        <Button
          type="submit"
          className="btn-main bg-cstm-green-4 max-w-106 w-full hover:text-white hover:bg-cstm-green-1"
        >
          Request a free quote
        </Button>
      </div>
    </form>
  );
}

export default Form;
