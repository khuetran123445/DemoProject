import React, { createContext, ReactNode, useState } from "react";

type TForm = {
  firstName: string;
  address: string;
};
export const AppContext = createContext<{
  formdata: TForm | null;
  SetFormData: React.Dispatch<React.SetStateAction<TForm | null>>;
}>({
  formdata: null,
  SetFormData: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [formdata, SetFormData] = useState<TForm | null>(null);
  return (
    <AppContext.Provider value={{ formdata, SetFormData }}>
      {children}
    </AppContext.Provider>
  );
};
