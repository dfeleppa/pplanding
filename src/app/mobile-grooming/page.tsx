import { mainServicePages } from "../../lib/content/main-services";
import { makeContentMetadata } from "../../lib/content/metadata";
import { ContentPageTemplate } from "../content-page-template";

const page = mainServicePages["mobile-grooming"];
export const metadata = makeContentMetadata(page);
export default function MobileGroomingPage() {
  return <ContentPageTemplate page={page} />;
}
