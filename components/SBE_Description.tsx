
import styles from '../styles/css/SBE_desc.module.css'
import Image from 'next/image';

// images
import constr from '../public/icons/constr.png'
import tech from '../public/icons/tech.png'
import hcare from '../public/icons/hcare.webp'
import design from '../public/icons/design.png'


//label -> image map
const makeRows = ((data: Array<Array<(string | StaticImageData)>>) => {
    return data.map((elem) =>
        <div className={styles.item} key={elem.toString()}>
            <div className={styles.imagebox}>
                <Image
                    alt='icon'
                    src={elem[1]}
                    layout='responsive'
                ></Image>
            </div>
            {elem[0]}
        </div>
    );
})

const SBE_Description = () => {
    return (
        <div className={styles.desc}>
            
            <h3>We&apos;re small but mighty</h3>
            <h4>Our lean staff means that we can keep our prices lower than our competitors</h4>
            <h4>Industries that we typically service include (but are not limited to):</h4>
            <br />

            <div className={styles.box2}>
                {makeRows([["Healthcare", hcare], ["Tech", tech], ["Construction", constr], ["Design + Creative", design]])}
            </div>
        </div>
    )
}

export default SBE_Description;