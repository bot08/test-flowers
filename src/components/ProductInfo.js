import ColorSelect from "./ColorSelect"
import React from "react";

const productInfo = [
  { label: 'Размер:', value: '28x28x28 см' },
  { label: 'Материал:', value: 'БУМАГА' },
  { label: 'Толщина:', value: '250 Гсм' },
  { label: 'Упаковка:', value: '2 шт./пакет, 75 пак/короб' },
  { label: 'Измерения:', value: '60x30x36 см' },
  { label: 'Вес:', value: '23.1 кг' },
  { label: 'Минимальный заказ:', value: '1 коробка' },
];

const ProductInfo = () => {
  return (
    <div className="product-info">
      <span className="product-category">Категории: “Осень 2023”, “Обёрточная бумага”</span>
      <h1 className="product-name">Обёрточная Бумага ALS</h1>
      <ColorSelect/>
      <div className="product-description">
        {productInfo.map((item, index) => (
          <React.Fragment key={index}>
            <span className="product-description-bold">{item.label}</span>
            <span>{item.value}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="cart-btn">Добавить в Корзину</div>
    </div>
  )
}

export default ProductInfo

/*
Размер: Материал: толщина: Упаковка: Измерения: Вес:  Минимальный заказ:

*/