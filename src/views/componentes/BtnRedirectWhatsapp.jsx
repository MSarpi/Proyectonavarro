import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function BtnRedirectWhatsapp({nombreWs, textWs}) {
  const [showToast, setShowToast] = useState(false);
  const handleRedirect = () => {
    if (!nombreWs || !textWs) {
      setShowToast(true);
      toast.error('Por favor, rellene todos los campos.');
    } else {
      // Si hay un texto definido, reemplazar espacios por %20
      const nombre = nombreWs ? nombreWs.replace(/ /g, "%20") : '';
      const texto = textWs ? textWs.replace(/ /g, "%20") : '';
      
      window.open(`https://api.whatsapp.com/send?phone=56999999999&text=Hola,%20soy%20${nombre}:%20${texto}`, "_blank");
    }
  };

  return (
    <div>
      <button className="btn btn-danger w-100 btn-lg" onClick={handleRedirect}>Contactar</button>
      {showToast && (
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      )}
    </div>
  );
}