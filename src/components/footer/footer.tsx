import React from "react";

import style from "./style.css";

interface FooterProps {
  readonly links: Array<string>;
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  let linksTemplate = links.map((linkName) => {
    return (
        <li className={style.footerItem}>
          <a className={style.footerLink} href="#">
            {linkName}
          </a>
        </li>
    );
  });

  return (
    <footer className={style.footerWrapper}>
      <ul className={style.footerList}>
        {linksTemplate}
      </ul>
    </footer>
    );
};
