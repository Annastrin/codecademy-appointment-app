import { Contact, Appointment } from "../../../interfaces";
import Tile from "../tile/Tile";

interface TileListProps {
  list: Contact[] | Appointment[];
}

export default function TileList({ list }: TileListProps) {
  return (
    <div>
      {list.map((item, index) => (
        <Tile item={item} key={index} />
      ))}
    </div>
  );
}
