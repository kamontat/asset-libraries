import include from "classnames";
import style from "./index.module.css";

export default function ActionBar() {
  const goToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className={include(style.actionBar, style.container)}>
      <div className={include(style.mainContainer)}>
        <a className={include(style.element, style.button)} onClick={goToTop}>
          <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.002 492.002">
            <path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
