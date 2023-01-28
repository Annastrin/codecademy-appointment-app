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
        <>
          <Tile item={item} key={index} />
          {index < list.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
}
