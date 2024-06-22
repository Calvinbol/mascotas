import { useEffect, useState } from "react";
import { HostelContext } from "./hostelContext";
import { getMyProfileContext } from "../Services/hostel.service";


const HostelProvider = ({ children }) => {
  const [hostel, setHostel] = useState(""); // Puedes inicializarlo con un valor por defecto


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await getMyProfileContext()
          setHostel(response)
        } catch (error) {
          console.erro('Error fetching profile:', error)
          localStorage.removeItem('token')
        }

      }
    }
    fetchProfile()
  }, [])

  return (
    <HostelContext.Provider value={{ hostel, setHostel }}>
      {children}
    </HostelContext.Provider>
  );
};





export default HostelProvider;