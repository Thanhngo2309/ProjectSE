import "./TableDisplay.css";

import TableItem from "../TableItem/TableItem";
import { table_list } from "../../assets/assets";
interface TableProps {
  category: string;
}

const TableDisplay = ({ category }: TableProps) => {
  return (
    <div className="Table-display" id="food-display">
      <h2>Top dishs near you</h2>
      <div className="table-display-list">
        {table_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <TableItem
                key={index}
                id={item._id}
                name={item.club_name}
                image={item.club_image}
                des={item.descripson}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TableDisplay;
