import Header from "../components/Header";
import styles from '../styles/css/Life.module.css'
import Image from "next/image";
import useMediaQuery from "../components/useMediaQuery";
import sm1 from '../public/sm1.webp'
import sm2 from '../public/sm2.jpeg'
import sm3 from '../public/sm3.jpeg'
import sm4 from '../public/sm4.jpeg'


const Life = () => {

    const isDesktop = useMediaQuery('(min-width: 960px)');

    return (
        <div className={styles.all}>
            <Header />
            <div className={styles.life}>

                <br />
                <h4>The busy life of Santa Monica California can make finding talent a drag</h4>
                <h3>Lean on our years spent developing genuine connections with local professionals to take the hassle out of hiring!</h3>
                <br />

                {isDesktop ? <div className={styles.images}>
                    <Image className={styles.img} src={sm1} layout='fixed' height={200} width={300}></Image>
                    <Image className={styles.img} src={sm2} layout='fixed' height={200} width={300}></Image>
                    <Image className={styles.img} src={sm3} layout='fixed' height={200} width={300}></Image>
                    <Image className={styles.img} src={sm4} layout='fixed' height={200} width={300}></Image>
                </div> : <div className={styles.images}>
                    <Image className={styles.img} src={sm1} layout='fixed' height={100} width={200}></Image>
                    <Image className={styles.img} src={sm3} layout='fixed' height={100} width={200}></Image>
                    <Image className={styles.img} src={sm4} layout='fixed' height={100} width={200}></Image>
                </div>}

            </div>
        </div>
    )
}
export default Life;