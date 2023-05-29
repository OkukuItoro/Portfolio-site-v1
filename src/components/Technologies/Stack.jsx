import React, { useState } from "react";
import TechIcons from "./TechIcons";

import {
  StackItem,
  StackText,
  ExpLevelContainer,
  ExpLevel,
} from "./TechnologiesStyles";

const Stack = ({ stack }) => {
  return (
    <>
      {stack.map((stackItem, i) => (
        <StackItem key={i}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TechIcons icon={stackItem.name} />
            <StackText>{stackItem.name}</StackText>
          </div>
          <ExpLevelContainer>
            <ExpLevel style={{ width: `${stackItem.exp}%` }}></ExpLevel>
          </ExpLevelContainer>
        </StackItem>
      ))}
    </>
  );
};

export default Stack;
