
import styles from '../../styles/css/SBE_desc.module.css'
import Image from 'next/image';

import constr from '../../public/icons/constr.png'
import tech from '../../public/icons/tech.png'
import hcare from '../../public/icons/hcare.png'
import design from '../../public/icons/design.png'


const makeRows = ((name: Array<string>, icons: Array<StaticImageData>) => {
    return name.map((elem) =>
        <div className={styles.item} key={elem.toString()}>
            {elem}
            <div className={styles.imagebox}>
                <Image
                    alt='icon'
                    src={tech}
                    layout='responsive'
                ></Image>
            </div>
        </div>
    );
})

const SBE_Description = () => {
    return (
        <div className={styles.desc}>
            <h2>Solution Based Enterprises is a boutique staffing and recruitment agency. We offer nation-wide staffing and recruitment services to various industries, including but not limited to:</h2>
            <div className={styles.box2}>
                {makeRows(["Construction", "Tech", "Healthcare", "Design + Creative"], [constr, tech, hcare, design])}
            </div>
        </div>
    )
}
export default SBE_Description;