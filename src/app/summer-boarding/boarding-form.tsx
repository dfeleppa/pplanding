import { NEW_CLIENT_FORM_URL } from "../../lib/booking";

export function BoardingFormModal({
  className = "",
  label = "Check Availability",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={NEW_CLIENT_FORM_URL}
      target="_blank"
      rel="noopener"
      data-track="moego-new-client-form"
      className={className}
    >
      {label}
      <span className="pp-cta-arrow" aria-hidden />
    </a>
  );
}
