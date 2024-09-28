import DefaultLayout from "@layouts/DefaultLayout";
import Jumbotron from "@mods/Jumbotron";
import Footer from "@mods/Footer";
import SectionDownload from "@mods/SectionContents/SectionDownload";
import SectionEnjoy from "@mods/SectionContents/SectionEnjoy";
import SectionFAQ from "@mods/SectionContents/SectionFAQ";
import SectionProfile from "@mods/SectionContents/SectionProfile";
import SectionWatch from "@mods/SectionContents/SectionWatch";

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </DefaultLayout>
  );
}

export default Landing;
