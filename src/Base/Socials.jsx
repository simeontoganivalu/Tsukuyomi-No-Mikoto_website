import React from "react";
import { facebook, insta, twitter } from "./SVG";

export default function Socials() {
  return (
    <div className="socials">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/Tsukuyomiofficialcommunity"
        className="socials__link telegram"
      ></a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/Tsukuyomi_____"
        className="socials__link"
      >
        {twitter}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Tsukuyomi-No-Mikoto-105618775644337"
        className="socials__link"
      >
        {facebook}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/tsukuyomimikoto_/"
        className="socials__link"
      >
        {insta}
      </a>
    </div>
  );
}
