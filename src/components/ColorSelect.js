function loop(){
  const elements = [];

  for (let i = 0; i < 12; i++) {
    elements.push(<div className="color-select-block" key={i}></div>);
  }

  return elements;
}

const ColorSelect = () => {
  return (
    <div>
      <span className="color-select-text">Выберете цвет:</span>
      <div className="color-select-block-container">
        {
          loop()
        }
      </div>
    </div>
  )
}

export default ColorSelect