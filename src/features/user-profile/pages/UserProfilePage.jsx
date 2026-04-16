
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"User Profile"} />
        <UserProfileCard />
      </Container>
    </section>
  );
};

export default UserProfilePage;