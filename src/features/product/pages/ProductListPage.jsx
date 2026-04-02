import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProductTable from "../components/ProductTable";

const ProductListPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"}  />
        <ProductTable/>

      </Container>
    </section>
  );
};

export default ProductListPage;