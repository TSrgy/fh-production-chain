import { Alignment, Button, Classes, Navbar } from "@blueprintjs/core";

import { FC } from "react";

export const PPNavbar: FC = () => {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
                <Navbar.Divider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" />
                <Button className={Classes.MINIMAL} icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    );
};
