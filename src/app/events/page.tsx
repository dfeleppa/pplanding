import { mainServicePages } from "../../lib/content/main-services";
import { makeContentMetadata } from "../../lib/content/metadata";
import { ContentPageTemplate } from "../content-page-template";

const page = mainServicePages.events;
export const metadata = makeContentMetadata(page);
export default function EventsPage() {
  return <ContentPageTemplate page={page} />;
}
