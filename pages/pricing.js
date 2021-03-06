import Layout from '../components/Layout/Layout'
import { companyInfo } from '../assets/config/settings'
import PricingSimpleTiers from '../components/Pricing/PricingSimpleTiers/PricingSimpleTiers'
import References from '../components/References/References'


const Pricing = () => {
  var title = `Default title | ${companyInfo.name}`
  var description = 'Default description.'

  return (
    <Layout title={title} description={description}>
      <PricingSimpleTiers />
      <References />
    </Layout>
  )
}


export default Pricing
