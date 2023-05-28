import React from "react";
import { DiFirebase, DiReact, DiDocker } from "react-icons/di";

import {
  StackItem,
  StackText,
  ExpLevelContainer,
  ExpLevel,
} from "./TechnologiesStyles";

const Stack = ({ stack }) => {
  return (
    <>
      {stack.map((stackItem) => (
        <StackItem>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DiReact size="2rem" />
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
