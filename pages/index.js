import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Alex Exchange</title>
        <meta name="description" content="The best virtual asset exchange platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="body boda2">
        <div className="card1 boda1 br-20 bg-dark">
          {/* header */}
          <div className="header bg-dark br-s-20">
            <div className="head py-1">
              <div className="d-flex column jac">
                
                <Image src="/h1.png" height={50} width={60} />
               
                <div className="text-light">
                  <h1><span className="text-warning">ALEX</span> <span className="text-warning">EXCHANGE</span> </h1>
                </div>
              </div>
            </div>
          </div>
          
          {/* products */}
          <div className="products bg-body">
          <div className="text-center p-1 deal py-2">
                <span className="bg-warning text-dark br-20 px-5 py-1">We deal with...</span>

            </div>
            <div className="d-flex jac column py-3 px-5">

              <div className="product">
                <Image src="/a1.png" height={50} width={150} />
              </div>
              <div className="product">
                <Image src="/p.png" height={50} width={120} />
              </div>
              <div className="product">
                <Image src="/c.png" height={50} width={120} />
              </div>
              <div className="product">
                <Image src="/b2.png" height={50} width={150} />
              </div>
              <div className="py-1">
                <Image src="/z2.png" height={40} width={150} />
              </div>

            </div>
          </div>
          {/* contacts */}
          <div className="contacts text-dark br-s1-20 boda py-3 bg-dark d-flex">
            <div className="contact br-15 p-2 bg-warning"><i class="bi bi-telephone h6 mx-1"></i>08136214603</div>
            <div className="contact  br-15 p-2 bg-warning "><i class="bi bi-whatsapp h6 mx-1"></i>09168610189</div>
          </div>
          {/* <div className="contacts text-dark br-s1-20 boda py-3 bg-dark d-flex">
            <Link href=""><div className="contact text-dark br-15 p-2 bg-warning"><i class="bi bi-telephone h6 mx-1"></i>08136214603</div></Link>
            <Link href=""><div className="contact text-dark br-15 p-2 bg-warning "><i class="bi bi-whatsapp h6 mx-1"></i>09168610189</div></Link>
          </div> */}
        </div>
      </main>

      
    </div>
  )
}
