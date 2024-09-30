import "./TableItem.css";
import rating_starts from "../../assets/rating_starts.png";
interface TableItemProps {
  id: string;
  name: string;
  image: string;
  des: string;
}

const TableItem = ({ id, name, image, des }: TableItemProps) => {
  return (
    <div className="table-item">
      <div className="table-item-img-container">
        <img className="table-item-image" src={image} alt="" />
      </div>
      <div className="table-item-info">
        <div className="table-item-name-rating">
          <p>{name}</p>
          <img src={rating_starts} alt="" />
        </div>
        <p className="table-item-desc">{des}</p>
      </div>
    </div>
  );
};

export default TableItem;
