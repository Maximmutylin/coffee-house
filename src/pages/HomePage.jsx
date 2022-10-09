import { BlogBlock } from "../components/BlogBlock"
import { DescriptionBlock } from "../components/DescriptionBlock"
import { FirstBlock } from "../components/FirstBlock"
import { Map } from "../components/Map"
import { SchemeBlock } from "../components/SchemeBlock"
import { ServiceBlock } from "../components/ServiceBlock"


export const HomePage = () => {
  return (
    <>
      <FirstBlock />
      <ServiceBlock />
      <SchemeBlock />
      <DescriptionBlock />
      <BlogBlock />
      <Map />
    </>
  )
}
