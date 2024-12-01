import Swal from "sweetalert2";

const Alert = (mssg, titl, icon, styl)=>{
    Swal.fire({
        title: titl,
        text: mssg,
        icon: icon, 
        confirmButtonText: "Cerrar", 
        confirmButtonColor: styl
    });
}
export default Alert