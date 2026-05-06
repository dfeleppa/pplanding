import { mainServicePages } from "../../lib/content/main-services";
import { makeContentMetadata } from "../../lib/content/metadata";
import { ContentPageTemplate } from "../content-page-template";

const page = mainServicePages["dog-daycare"];
export const metadata = makeContentMetadata(page);
export default function DogDaycarePage() {
  return <ContentPageTemplate page={page} />;
}
