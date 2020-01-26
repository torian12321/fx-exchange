import React from "react";
import classNames from "classnames";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { IHeading } from "./Heading.interfaces";
import * as styles from "./Heading.styles";

const Heading = (props: IHeading) => {
  const { children, caption, level = 1, className } = props;
  const content = children || caption;
  const TagName: any = `h${level}`;

  return (
    <TagName
      css={styles.heading}
      className={classNames(className)}
    >
      {content}
    </TagName>
  );
};

export { Heading };
