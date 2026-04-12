import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import VoucherTable from "../components/VoucherTable";

const VoucherListPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"} />
        <VoucherTable />
      </Container>
    </section>
  );
};

export default VoucherListPage;