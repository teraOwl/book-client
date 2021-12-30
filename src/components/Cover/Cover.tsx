import React from "react";
import { CoverWrapper } from "./Cover.styled";

const Cover: React.FC<{ url: string }> = ({ url }) => <CoverWrapper src={url} />;

export default Cover;