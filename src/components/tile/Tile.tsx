import { Contact, Appointment } from "../../types";

type TileProps = {
  item: Contact | Appointment;
};

export default function Tile({ item }: TileProps) {
  return (
    <div className="tile-container">
      {Object.values(item).map((val, index) => (
        <p
          className={index === 0 ? "tile-title" : "tile"}
          key={`${index}-${val}`}
        >
          {val}
        </p>
      ))}
    </div>
  );
}
