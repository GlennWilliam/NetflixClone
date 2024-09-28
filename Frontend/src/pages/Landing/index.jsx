import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Jumbotron from "../../components/Modules/Jumbotron";
import SectionDownload from "../../components/Modules/SectionContents/SectionDownload";
import SectionEnjoy from "../../components/Modules/SectionContents/SectionEnjoy";
import SectionFAQ from "../../components/Modules/SectionContents/SectionFAQ";
import SectionProfile from "../../components/Modules/SectionContents/SectionProfile";
import SectionWatch from "../../components/Modules/SectionContents/SectionWatch";

function Landing(){
  return(
    <DefaultLayout>
    <Jumbotron />
    <SectionEnjoy />
    <SectionDownload />
    <SectionWatch />
    <SectionProfile />
    <SectionFAQ />
    </DefaultLayout>
  )
}

export default Landing;