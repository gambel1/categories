

import css from "./Categories.module.css";
import sprite from "../../images/sprite.svg";
import { listCategory } from "../addCategory";
import { useState } from "react";

export default function Categories() {
  const [listOpen, setListOpen] = useState(false);

  const handleClickList = () => {
    setListOpen((prevState) => !prevState);
  };

  return (
    <div className="container">
      <section className={css.categories}>
        <div className={css.categoriesBox}>
          <h2>Categories</h2>
          <button
            onClick={handleClickList}
            className={css.categoriesBoxButton}
            type="button"
          >
            <svg width={15} height={15}>
              <use href={sprite + "#icon-add"}></use>
            </svg>
          </button>
        </div>
        {listOpen ? (
          <ul className={css.list}>
            {listCategory.map(({ list, id }) => (
              <li className={css.listItem} key={id}>{list}</li>
            ))}
          </ul>
        ) : (
          <h2 className={css.title}>Not found, try later</h2>
        )}
      </section>
    </div>
  );
}