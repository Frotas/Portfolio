import Bootstrap from "./Bootstrap";
import DataBase from "./DataBase";
import Java, { IconColors, IconVariants, IconProps } from "./Java";
import JavaScript from "./JavaScript";
import NextJS from "./NextJS";
import NodeJS from "./NodeJS";
import Sass from "./Sass";
import SecureWindow from "./SecureWindow";
import SpringBoot from "./SpringBoot";
import TypeScript from "./TypeScript";
import UML from "./UML";
import WebCode from "./WebCode";
import WebLayout from "./WebLayout";
import WebPack from "./WebPack";

export type IconsProps = {
  color?: IconColors;
  variant?: IconVariants;
} & IconProps;

export default {
  BS: Bootstrap,
  DB: DataBase,
  Java: Java,
  JS: JavaScript,
  NextJS: NextJS,
  NodeJS: NodeJS,
  Sass: Sass,
  Spring: SpringBoot,
  TS: TypeScript,
  UML: UML,
  WP: WebPack,
  Web: WebLayout,
  Sec: SecureWindow,
  WebCode: WebCode,
};
