import type { AnchorLinkProps } from "react-anchor-link-smooth-scroll";
import type { ComponentType } from "react";
import AnchorLinkPkg from "react-anchor-link-smooth-scroll";

const AnchorLink =
  (AnchorLinkPkg as { default?: ComponentType<AnchorLinkProps> }).default ??
  (AnchorLinkPkg as ComponentType<AnchorLinkProps>);

export default AnchorLink;
