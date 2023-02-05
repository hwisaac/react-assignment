import React, { useEffect, useState } from "react";

interface ISubCheckboxProps {}

const SubCheckbox = ({}: ISubCheckboxProps) => {
  return (
    <li>
      <input type='checkbox' />
      자식선택
    </li>
  );
};

export default SubCheckbox;
