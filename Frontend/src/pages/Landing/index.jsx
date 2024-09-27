import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Jumbotron from "../../components/Modules/Jumbotron";
import SectionDownload from "../../components/Modules/SectionContents/SectionDownload";
import SectionEnjoy from "../../components/Modules/SectionContents/SectionEnjoy";
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
    </DefaultLayout>
  )
}

export default Landing;