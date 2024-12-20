import React from "react";
import { Link } from "./styles.ts";

const ButtonLink = (props) => {
    return <Link href={props.Link}>{props.name}</Link>
}

export default ButtonLink