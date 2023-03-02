import { ContentTerms, HeaderTerms } from './StyleMyProfile';
import { TiArrowSortedDown } from 'react-icons/ti'
import { useState } from 'react';

const Terms = ({ data }) => {
  const [selected, setSelected] = useState(false)

  const Conditions = (terms) => {
    return (
      <ContentTerms>
        <HeaderTerms isSelected={selected}>
          <div className="content-header">
            <h2><strong>{terms.title}</strong></h2>
            <div className="button-arrow"><TiArrowSortedDown /></div>
          </div>
          <div className="container-content">
            
          </div>
        </HeaderTerms>
      </ContentTerms>
    )
  }

  return (
    data &&
    data.map((sec) => (
      Conditions(sec.terms)
    ))
  )
}

export default Terms