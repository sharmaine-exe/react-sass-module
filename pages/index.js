import PageHeading from "../components/PageHeading";
import  Button  from "../ui/buttons/Button";

function HomePage() {
  return (
    <>
      <PageHeading
        title="React Styling Solutions"
        tagline="component styling using SASS"
      />
      
      <Button label="button base" variant="base" />
      <Button label="warning button" variant="warning" />
      <Button label="primary button" variant="primary" />
      <Button label="info button" variant="info" />
      <Button label="danger button" variant="danger" />
      <Button label="success button" variant="success" />
      
    </>
  );
}

export default HomePage;
