const ProductGallery = () => {
  return (
    <div className="product-gallery">
      <img src="/photo1.png" className="product-gallery-big-image" alt=""/>
      <div className="product-gallery-small">
        <img src="/photo2.png" className="product-gallery-small-image" alt=""/>
        <img src="/photo3.png" className="product-gallery-small-image" alt=""/>
        <img src="/photo4.png" className="product-gallery-small-image" alt=""/>
      </div>
    </div>
  )
}

export default ProductGallery