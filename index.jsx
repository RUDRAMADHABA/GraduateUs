import Navbar from "/layout/appbar"
import Intern from "../layout/Components/Intern"
import Notes from "../layout/Components/Notes"
import Cgpa from "../layout/Components/Cgpa"
import Premium from "../layout/Components/Premium"
import HomeM from "../layout/home"
import Home from "../layout/Components/Home"
export default function Homes() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <HomeM/>
    <Intern/>
    <Notes/>
    <Cgpa/>
    <Premium/>
    </div>
  )
}
