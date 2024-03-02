import { useAuthContext } from "@/common/contexts/AuthContext";
import { CompanyDTO } from "@/interfaces/company.dto";
import React, { useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Settings() {
  const initialCompany = useMemo(
    () => JSON.parse(localStorage.getItem("company") || ""),
    []
  );

  const [company, setCompany] = useLocalStorage("company", initialCompany);

  useEffect(() => {
    console.log(company);
  }, []);

  return <div>Settings</div>;
}
