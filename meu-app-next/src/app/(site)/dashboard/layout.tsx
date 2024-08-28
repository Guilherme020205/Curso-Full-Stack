import { Children } from "react";

export const metadata = {
    title: "Painel do site",
    description: "Esse é o painel do site",
  };
  
export default function DashboardLayout(
    {children,

}: {children: React.ReactNode }){
 
    return(
        <>
        <h3>Header do dashboard</h3>
        <br/>
        {children}
        </>
    )
}