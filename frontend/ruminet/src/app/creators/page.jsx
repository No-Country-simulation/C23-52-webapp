import FeaturedCreators from "./components/FeaturedArtist";
import Hero from "./components/Hero";
import MemberShipCardCreators from "./components/MembershipCardCreators";
import SupportCreators from "./components/SupportCreators";

export default function Creators() {
  return (
    <>
      <Hero />
      <FeaturedCreators />
      <SupportCreators />
      <MemberShipCardCreators />
    </>
  );
}
