import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const TabItem = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  padding: 6px 10px;
  font-size: 9pt;
  font-weight: bold;
  background: #eeeeee;
  color: #000;
  cursor: pointer;

  &:last-child {
    cursor: unset;
  }
`;

export default ({ tabsConfig, data }) => {
  const [activeIdx, setActiveIdx] = useState(-1); // -1: show no content

  const handleTabClick = idx => () => {
    if (tabsConfig[idx].clickable) {
      // set to close if it is already opened
      setActiveIdx(i => i === idx ? -1 : idx);
    }
  };

  return (
    <>
      <Tabs>
        {tabsConfig.map((elem, idx) => (
          <TabItem key={idx} onClick={handleTabClick(idx)}>
            {elem.tabContent}
          </TabItem>
        ))}
      </Tabs>
      {activeIdx > -1 && tabsConfig[activeIdx].renderBottom(data)}
    </>
  );
};
