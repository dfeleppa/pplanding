import { contentPages } from "../../lib/content/pages";
import { makeContentMetadata } from "../../lib/content/metadata";
import { ContentPageTemplate } from "../content-page-template";

const page = contentPages["dog-daycare-boarding"];
export const metadata = makeContentMetadata(page);
export default function Page() {
  return <ContentPageTemplate page={page} />;
}
