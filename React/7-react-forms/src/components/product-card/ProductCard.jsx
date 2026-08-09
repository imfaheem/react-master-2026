import style from "./ProductCard.module.css";

export const ProductCard = () => {
    return (
        <div>
            <h1 className={style.title}>Product Card</h1>
            <div className={style.productCard}>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Product Title" 
                    className={style.productCardImage} 
                />
                <div className={style.productCardContent}>
                    <h2 className={style.productCardTitle}>Sample Product Title</h2>
                    <p className={style.productCardDescription}>
                        Yeh product ki thodi si description hai jisme product ke key features define kiye gaye hain.
                    </p>
                    <div className={style.productCardPrice}>$99.99</div>
                </div>
            </div>
        </div>
    )
}
