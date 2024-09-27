import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Jumbotron from "../../components/Modules/Jumbotron";
import SectionDownload from "../../components/Modules/SectionContents/SectionDownload";
import SectionEnjoy from "../../components/Modules/SectionContents/SectionEnjoy";

function Landing(){
  return(
    <DefaultLayout>
    <Jumbotron />
    <SectionEnjoy />
    <SectionDownload />
    </DefaultLayout>
  )
}

export default Landing;