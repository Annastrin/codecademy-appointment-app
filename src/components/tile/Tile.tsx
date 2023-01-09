import { Contact, Appointment } from "../../../interfaces";

interface TileProps {
  item: Contact | Appointment;
}

export default function Tile({ item }: TileProps) {
  return (
    <div className="tile-container">
      {item &&
        Object.values(item).map((val, index) => (
          <p className={index === 0 ? "tile-title" : "tile"}>{val}</p>
        ))}
    </div>
  );
}
