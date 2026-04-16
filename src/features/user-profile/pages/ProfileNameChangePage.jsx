import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import ProfileNameChangeCard from "../components/ProfileNameChangeCard";

const ProfileNameChangePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Change Your Name"}
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
        />
        <ProfileNameChangeCard />
      </Container>
    </section>
  );
};

export default ProfileNameChangePage;