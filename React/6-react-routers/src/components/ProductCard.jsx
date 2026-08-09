import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"
import { CATEGORY_TYPES } from "../utils/utils"

export const ProductCard = ({ product }) => {
    const categoryColor = CATEGORY_TYPES[product.category] ?? "transparent";

    return (
        <section className={styles.productCard}>
            <div className={styles.imgDiv}>
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div className={styles.flex}>
                <p className={`${styles.price} ${product.price <= 20000 ? styles.prodSize : null}`}>
                    ${product.price}
                </p>
                <p>
                    <small className={`${styles.category} ${styles.categoryStyle}`} style={{backgroundColor: categoryColor }}>
                        {product.category}
                    </small>
                </p>
            </div>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </section>
    )
}
