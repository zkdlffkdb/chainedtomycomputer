import React from 'react';
import { useNavigate } from "react-router-dom";

export const Prologue = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/chapter_1';
    navigate(path);
  }

  return (
    <div>Prologue</div>
  )
}
