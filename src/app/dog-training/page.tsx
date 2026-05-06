import { mainServicePages } from "../../lib/content/main-services";
import { makeContentMetadata } from "../../lib/content/metadata";
import { ContentPageTemplate } from "../content-page-template";

const page = mainServicePages["dog-training"];
export const metadata = makeContentMetadata(page);
export default function DogTrainingPage() {
  return <ContentPageTemplate page={page} />;
}
