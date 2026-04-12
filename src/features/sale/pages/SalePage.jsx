
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import SaleCard from "../components/SaleCard";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"} />
        <SaleCard />
      </Container>
    </section>
  );
};

export default SalePage;