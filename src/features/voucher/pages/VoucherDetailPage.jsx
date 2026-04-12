import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import VoucherCard from "../components/VoucherCard";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/dashboard/vouchers" }]}
        />
        <VoucherCard />
      </Container>
    </section>
  );
};

export default VoucherDetailPage;