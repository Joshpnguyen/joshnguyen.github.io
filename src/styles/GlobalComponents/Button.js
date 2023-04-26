import React from 'react';
import { saveAs } from 'file-saver';
import { ButtonBack, ButtonFront } from './index'

const Button = (props) => {
  const handleDownload = async () => {
    const fetchFile = await fetch('Resume.pdf');
    const blobFromFetch = await fetchFile.blob();

    const blob = new Blob([blobFromFetch], { type: 'application/pdf' });
    saveAs(blob, 'josh_nguyen_resume.pdf');
  }

  return (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={handleDownload} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
  );
};

export default Button
