import { prosePages } from "../../lib/content/prose";
import { makeProseMetadata } from "../../lib/content/metadata";
import { ProsePageTemplate } from "../prose-page-template";

const page = prosePages.requirements;
export const metadata = makeProseMetadata(page);
export default function Page() {
  return <ProsePageTemplate page={page} />;
}
