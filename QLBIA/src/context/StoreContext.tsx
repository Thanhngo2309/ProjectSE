import React, { createContext, ReactNode } from "react";
import { table_list } from "../assets/assets";

// Define the type for your table list (adjust based on your actual structure)
interface TableItem {
  _id: string;
  club_name: string;
  club_image: string; // Assuming these are strings, change if needed
  descripson: string; // Consider correcting this to "descriptio
  // Add other properties relevant to the table item
}

// Define the type for your context
interface StoreContextType {
  table_list: TableItem[];
}

// Create the context with the defined type, initializing with default values
export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

interface StoreContextProviderProps {
  children: ReactNode; // ReactNode type to accept JSX children
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({
  children,
}) => {
  // The context value contains the table_list imported from assets
  const contextValue: StoreContextType = {
    table_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
