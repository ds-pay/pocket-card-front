import { ContentTerms, HeaderTerms } from './StyleMyProfile';
import { TiArrowSortedDown } from 'react-icons/ti'
import { useState } from 'react';

const Terms = ({ dataTerms }) => {
  const [selectedTerms, setSelectedTerms] = useState(false);
  const [selectedProtection, setSelectedProtection] = useState(false);

  const Conditions = (terms) => {
    return (
      <HeaderTerms onClick={() => setSelectedTerms(!selectedTerms)} isSelected={selectedTerms}>
        <div className="content-header">
          <h2><strong>{terms.title}</strong></h2>
          <div className="button-arrow"><TiArrowSortedDown /></div>
        </div>
        <div className="container-content">
          {
            terms.conditions.map((condition) => (
              <>
                <h2>{condition.title}</h2>
                <p>{condition.paragraph}</p>
              </>
            ))
          }
        </div>
      </HeaderTerms>
    )
  };

  const Protection = (protection) => {
    return (
      <HeaderTerms onClick={() => setSelectedProtection(!selectedProtection)} isSelected={selectedProtection}>
        <div className="content-header">
          <h2><strong>{protection.title}</strong></h2>
          <div className="button-arrow"><TiArrowSortedDown /></div>
        </div>
        <div className="container-content">
          {
            protection.policies.map((police) => (
              <>
                <h2>{police.title}</h2>
                {
                  police.paragraphs.map((para) => (
                    <p>{para.paragraph}</p>
                  ))
                }
              </>
            ))
          }
        </div>
      </HeaderTerms>
    )
  }

  return (
    dataTerms &&
    dataTerms.map((sec) => (
      <ContentTerms>
        {Conditions(sec.terms)}
        {Protection(sec.protection)}
      </ContentTerms>
    ))
  )
}

export default Terms