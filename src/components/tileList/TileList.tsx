import { Fragment } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Contact, Appointment } from "../../types";
import Tile from "../tile/Tile";

type TileListProps = {
  list: (Contact | Appointment)[];
};

export default function TileList({ list }: TileListProps) {
  return (
    <List disablePadding>
      {list.map((item, index) => (
        <Fragment key={item.id}>
          <Tile item={item} />
          {index < list.length - 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
}
