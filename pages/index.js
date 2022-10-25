import PageHeading from "../components/PageHeading";
import  Button  from "../ui/buttons/Button";
import FlexBox from "../layouts/flexbox/FlexBox";

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
