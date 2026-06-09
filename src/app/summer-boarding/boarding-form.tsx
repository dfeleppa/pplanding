"use client";

import Script from "next/script";

const FORM_ID = "EOJK996mQLMFoTTvYhRS";

export function BoardingFormPopup() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`popup-${FORM_ID}`}
        title="Boarding"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Boarding"
        data-height="1261"
        data-layout-iframe-id={`popup-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-modal-height="1261"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
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
