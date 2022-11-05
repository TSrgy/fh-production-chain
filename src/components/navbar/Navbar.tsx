import { Alignment, Navbar as BPNavbar, Button, Classes } from "@blueprintjs/core";

import { FC } from "react";

export const Navbar: FC = () => {
    return (
        <BPNavbar>
            <BPNavbar.Group align={Alignment.LEFT}>
                <BPNavbar.Heading>Blueprint</BPNavbar.Heading>
                <BPNavbar.Divider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" />
                <Button className={Classes.MINIMAL} icon="document" text="Files" />
            </BPNavbar.Group>
        </BPNavbar>
    );
};
