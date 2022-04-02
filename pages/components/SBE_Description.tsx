
import styles from '../../styles/css/SBE_desc.module.css'
import Image from 'next/image';

import constr from '../../public/icons/constr.png'
import tech from '../../public/icons/tech.png'
import hcare from '../../public/icons/hcare.webp'
import design from '../../public/icons/design.png'


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


// let scores = new Map<string, number>();
// scores.set("bill", 10);
// scores.set("bob", "10"); // 💥 - Argument of type 'string' is not assignable to parameter of type 'number'.


const SBE_Description = () => {
    return (
        <div className={styles.desc}>
            <h2>Solution Based Enterprises is a boutique staffing and recruitment agency. We offer nation-wide staffing and recruitment services for various industries, including but not limited to:</h2>
            <br />

            <div className={styles.box2}>
                {makeRows([["Construction", constr], ["Tech", tech], ["Healthcare", hcare], ["Design + Creative", design]])}
            </div>
        </div>
    )
}
export default SBE_Description;