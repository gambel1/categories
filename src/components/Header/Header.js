import css from "./Header.module.css";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

export default function Header() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeZoom = (newZoomLevel) => {
    if (newZoomLevel >= 25 && newZoomLevel <= 200) {
      document.body.style.zoom = `${newZoomLevel}%`;
      setZoomLevel(newZoomLevel);
    }
  };

  const handleZoomChange = (event) => {
    const newZoomLevel = parseInt(event.target.value);
    changeZoom(newZoomLevel);
  };

  const handleMenuItemClick = (newZoomLevel) => {
    changeZoom(newZoomLevel);
    setIsMenuOpen(false); // Закрываем меню после выбора
  };

  const decreaseZoom = () => {
    const newZoomLevel = zoomLevel - 25;
    changeZoom(newZoomLevel);
  };

  const increaseZoom = () => {
    const newZoomLevel = zoomLevel + 25;
    changeZoom(newZoomLevel);
  };

  return (
    <div className="container">
      <div className={css.headerBox}>
        <h1>Services</h1>

        <div>
          <ul className={css.list}>
            <li>
              <p className={css.listView}>LIST VIEW</p>
            </li>
            <li>
              <button className={css.listButtonIcon} type="button">
                <svg width={20} height={27}>
                  <use href={sprite + "#icon-t"}></use>
                </svg>
              </button>
            </li>

            <li>
              <button
                onClick={decreaseZoom}
                className={css.listButtonIconCurrent}
                type="button"
              >
                <svg width={20} height={27}>
                  <use href={sprite + "#icon-minus"}></use>
                </svg>
              </button>
            </li>

            <li>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onChange={handleZoomChange}
                value={zoomLevel}
                className={css.listButtonNul}
                type="button"
              >
                {zoomLevel}%
              </button>
            </li>

            <li>
              <button
                onClick={increaseZoom}
                className={css.listButtonIconCurrent}
                type="button"
              >
                <svg width={20} height={27}>
                  <use href={sprite + "#icon-plus"}></use>
                </svg>
              </button>
            </li>
          </ul>
          {isMenuOpen && (
            <ul className={css.wrap}>
              <li>
                <button onClick={() => handleMenuItemClick(25)}>25%</button>
              </li>
              <li>
                <button onClick={() => handleMenuItemClick(50)}>50%</button>
              </li>
              <li>
                <button onClick={() => handleMenuItemClick(75)}>75%</button>
              </li>
              <li>
                <button onClick={() => handleMenuItemClick(100)}>100%</button>
              </li>
              <li>
                <button onClick={() => handleMenuItemClick(125)}>125%</button>
              </li>
              <li>
                <button onClick={() => handleMenuItemClick(150)}>150%</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
