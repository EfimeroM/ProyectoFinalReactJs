import { useContext } from "react"
import Swal from "sweetalert2"

export const rightCardAlert = (msg) => {
		const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 5000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})
			Toast.fire({
				icon: 'success',
				title: msg
			})
}
export const errorAlert = (title,text, footer) => {
		Swal.fire({
				icon: 'error',
				title: title,
				text: text,
				footer: footer
		})
}
export const orderCompleteAlert = (order, deleteCart) => {
		Swal.fire({
			icon: 'success',
			title: 'Orden registrada!',
			text: `Guarde su número de orden: ${order}`,
			willClose: () => {
				deleteCart()
			}
		})
}


