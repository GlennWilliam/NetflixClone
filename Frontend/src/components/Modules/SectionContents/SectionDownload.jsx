import React from 'react'
import SectionLayout from '../../Layouts/Sectionlayout'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '../../../constants/listAsset'
import EachUtils from '../../../utils/eachUtils'
import { LIST_CONTENT_2_EN, LIST_CONTENT_2_ID } from '../../../constants/listContent'

const SectionDownload = () => {
  return (
    <SectionLayout>
        <div>
            <img src={DOWNLOAD_PHONE_IMAGE} alt="" className="w-96"/>
            <div>
                <img src={DOWNLOAD_COVER_IMAGE} alt="" className="w-96"/>
            </div>
        </div>
        <EachUtils of={LIST_CONTENT_2_EN} render={(item, index) => (
            <div key={index}>
                <h2 className="text-5xl font-black">{item.title}</h2>
                <p>{item.desc}</p>
            </div>
        )}/>
    </SectionLayout>
  )
}

export default SectionDownload