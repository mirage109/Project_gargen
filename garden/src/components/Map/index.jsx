import React from 'react';
import style from './style.module.css';

export const Map = () => {
  return (
    <iframe
      className={style.map}
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.0411124015218!2d13.374541050368757!3d52.50789846057895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1688579670481!5m2!1sru!2sde"
      loading="lazy"
    ></iframe>
  );
}