import React from "react";
import { languageAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";

import EachUtils from "@/utils/eachUtils";
import DefaultButton from "@mods/DefaultButton";
import { LIST_CTA_EN, LIST_CTA_ID } from "@/constants/listCTA";

const InputMembership = () => {
  const [language] = useAtom(languageAtom);
  return (
    <form>
      <EachUtils
        of={language == "en" ? LIST_CTA_EN : LIST_CTA_ID}
        render={(item, index) => (
          <div key={index}>
            <h3 className="text-white text-xl">{item.title}</h3>
            <div className="relative flex justify-center items-center gap-2 py-4">
              <input
                placeholder={item.labelInput}
                className="w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent"
              />
              <label className="absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all text-lg">
                {item.labelInput}
              </label>
              <DefaultButton
                onClick={() => console.log("register!")}
                text={item.buttonSubmit}
                isArrowIcon={true}
                styles="flex py-4 w-1/2 flex justify-center items-center gap-2 text-xl"
              />
            </div>
          </div>
        )}
      />
    </form>
  );
};

export default InputMembership;
