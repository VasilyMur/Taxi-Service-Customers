import Header from './Header';
import Head from 'next/head';
import Footer from '../components/Footer';

const Layout = (props) => (

  <div>
    <Head>
        <title>Трезвый Водитель</title>
    </Head>
    <Header/>
    <div className="inner">
        {props.children}
    </div>
    <Footer/>
  </div>

)

export default Layout