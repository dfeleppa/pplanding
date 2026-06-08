"use client";

import Script from "next/script";

const FORM_ID = "EOJK996mQLMFoTTvYhRS";

export function BoardingForm() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        title="Boarding"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Boarding"
        data-height="1656"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        style={{
          width: "100%",
          height: "1656px",
          border: "none",
          display: "block",
          background: "white",
          borderRadius: "3px",
        }}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
