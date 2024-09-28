import React from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/jotai/atoms";

import EachUtils from "@/utils/eachUtils";
import OptionLanguage from "@mods/OptionLanguage";
import {
  LIST_FooterQuestion_EN,
  LIST_FooterQuestion_ID,
} from "@/constants/listFooterQuestion";
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from "@/constants/listFooter";

const Footer = () => {
  const [language] = useAtom(languageAtom);
  return (
    <EachUtils
      of={language == "en" ? LIST_FooterQuestion_EN : LIST_FooterQuestion_ID}
      render={(item, index) => (
        <footer className="w-full text-white bg-black border-t-8 border-stone-900 p-8">
          <div key={index}>
            {item.desc} <a href="">123-456-789</a>
          </div>
          <ul className="grid sm:grid-cols-4 gap-4 py-8">
            <EachUtils
              of={language == "en" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
              render={(item, index) => (
                <li key={index}>
                  <a href={item.url} className="underline">
                    {item.title}
                  </a>
                </li>
              )}
            />
          </ul>
          <OptionLanguage />
          <p className="mt-4">NetlflixClone @Copyright</p>
        </footer>
      )}
    />
  );
};

export default Footer;
