// components/Accordion/Accordion.js
import React, { useState, useEffect } from 'react';
import '../styles/Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set "Personal Details" as active by default
    setActiveIndex(0);
  }, []);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      const isActive = index === activeIndex;
      const contentClassName = `content ${isActive ? 'active' : ''}`;
      const titleClassName = `title ${isActive ? '' : 'collapsed'}`;

      const details = item.content.split('\n').map((detail, i) => (
        <p key={i}>{detail}</p>
      ));

      const formattedDetails = details.reduce((acc, el, i) => {
        if (i % 2 === 0) {
          acc.push(
            <div className="content-row" key={`row-${i / 2}`}>
              <div className="content-column">{el}</div>
              {details[i + 1] && <div className="content-column">{details[i + 1]}</div>}
            </div>
          );
        }
        return acc;
      }, []);

      return (
        <React.Fragment key={index}>
          <div className='accordion-container'>
            <div className={titleClassName} onClick={() => onTitleClick(index)}>
              {item.title}
            </div>
            <div className={contentClassName}>
              {isActive && formattedDetails}
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return <div className="accordion">{renderItems()}</div>;
};

export default Accordion;
