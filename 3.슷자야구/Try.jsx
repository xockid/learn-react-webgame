import React, { memo } from 'react';

const Try = memo(({ tryInfo }) => { //props 구조분해 { tryInfo }
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
});

Try.displayName = 'Try';

export default Try;