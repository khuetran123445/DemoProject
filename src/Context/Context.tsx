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

type TPay = {
  totalPay: number | null;
};

export const PayContext = createContext<{
  pay: TPay | null;
  setPay: React.Dispatch<React.SetStateAction<TPay | null>>;
}>({
  pay: null,
  setPay: () => {},
});

export const PayProvider = ({ children }: { children: ReactNode }) => {
  const [pay, setPay] = useState<TPay | null>(null);
  return (
    <PayContext.Provider value={{ pay, setPay }}>
      {children}
    </PayContext.Provider>
  );
};
