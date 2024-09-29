import React from 'react'
import SectionLayout from '../../../Layouts/Sectionlayout'
import EachUtils from '../../../../utils/eachUtils'
import { LIST_CONTENT_3_EN, LIST_CONTENT_3_ID } from '../../../../constants/listContent'
import { WATCH_DEVICE_IMAGE, WATCH_DEVICE_VIDEO } from '../../../../constants/listAsset'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../../jotai/atoms' 

const SectionWatch = () => {
    const[language] = useAtom(languageAtom)
  return (
    <SectionLayout>
        <EachUtils of={language == "en" ? LIST_CONTENT_3_EN : LIST_CONTENT_3_ID} render={(item, index) => (
            <div key={index} className="px-8">
                <h2 className="text-5xl font-black">{item.title}</h2>
                <p className="text 2-xl mt-4">{item.desc}</p>
            </div>
        )}/>
        <div className="relative max-w-xl mx-auto">
            <img src={WATCH_DEVICE_IMAGE} alt="Watch Device" className="relative z-10" />
            <div className="absolute w-[60%] top-10 left-1/2 -translate-x-1/2">
                <video autoPlay loop muted>
                    <source src={WATCH_DEVICE_VIDEO} type="video/mp4" />
                </video>
            </div>
        </div>
    </SectionLayout>
  )
}

export default SectionWatch