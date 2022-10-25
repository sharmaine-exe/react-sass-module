import { PageHeading } from "../components/page-heading";
import { Button } from "../ui/button";
import { FlexBox } from "../layouts/flexbox";
function HomePage() {
  return (
    <>
      <PageHeading
        title="React Styling Solutions"
        tagline="component styling using SASS"
      />
      <FlexBox>
      <Button label="button base" variant="base" />
      <Button label="warning button" variant="warning" />
      <Button label="primary button" variant="primary" />
      <Button label="info button" variant="info" />
      <Button label="danger button" variant="danger" />
      <Button label="success button" variant="success" />
      </FlexBox>
    </>
  );
}

export default HomePage;
