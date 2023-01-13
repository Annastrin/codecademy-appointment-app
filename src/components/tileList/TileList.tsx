import { Contact, Appointment } from "../../types";
import Tile from "../tile/Tile";

type TileListProps = {
  list: Contact[] | Appointment[];
};

export default function TileList({ list }: TileListProps) {
  return (
    <div>
      {list.map((item, index) => (
        <Tile item={item} key={index} />
      ))}
    </div>
  );
}
