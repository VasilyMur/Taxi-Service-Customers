//import Link from 'next/link';
import Layout from '../components/Layout';
import Conversation from '../components/Conversation';
import PricesDesktop from '../components/PricesDesktop';
import PricesMobile from '../components/PricesMobile';
import DrunkLaw from '../components/DrunkLaw';
import Advantages from '../components/Advantages';

import "../css/styles.styl";



  class Index extends React.Component {

      render() {

          return (
            <div>
                <Layout>
                    {/* <h1 className='example'>CONVERSATION</h1> */}
                    <div className="conversation">
                        <Conversation />
                    </div>
                    <div className="our-prices">
                        <h2>Наши Цены</h2>
                        <PricesDesktop />
                        <PricesMobile />
                    </div>
                    <DrunkLaw/>
                    <Advantages />
                </Layout>
            </div>
          )
      }
  }

  
  
  export default Index;