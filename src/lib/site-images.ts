import aboutJpg from "@/assets/about.jpg";
import aboutWebp from "@/assets/about.webp";
import constructionJpg from "@/assets/construction.jpg";
import constructionWebp from "@/assets/construction.webp";
import excellenceJpg from "@/assets/excellence.jpg";
import excellenceWebp from "@/assets/excellence.webp";
import heroJpg from "@/assets/hero.jpg";
import heroWebp from "@/assets/hero.webp";
import logoPng from "@/assets/LogoBasilea.png";
import logoWebp from "@/assets/LogoBasilea.webp";
import pharmaJpg from "@/assets/pharma.jpg";
import pharmaWebp from "@/assets/pharma.webp";

export const siteImages = {
  hero: {
    src: heroJpg,
    webp: heroWebp,
    width: 1600,
    height: 1200,
  },
  about: {
    src: aboutJpg,
    webp: aboutWebp,
    width: 1600,
    height: 1067,
  },
  pharma: {
    src: pharmaJpg,
    webp: pharmaWebp,
    width: 1280,
    height: 960,
  },
  construction: {
    src: constructionJpg,
    webp: constructionWebp,
    width: 1280,
    height: 960,
  },
  excellence: {
    src: excellenceJpg,
    webp: excellenceWebp,
    width: 1600,
    height: 1000,
  },
  logo: {
    src: logoPng,
    webp: logoWebp,
    width: 220,
    height: 88,
  },
} as const;

export type SiteImageKey = keyof typeof siteImages;

export type SiteImage = (typeof siteImages)[SiteImageKey];
