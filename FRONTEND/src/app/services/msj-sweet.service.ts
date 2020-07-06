import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class MsjSweetService {

  constructor() { }

  mensajeCorrecto(titulo: string, mensaje: string) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success'
    })
  }

  mensajeError(titulo: string, mensaje: string) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error'
    })
  }

  mensajeAdvertencia(titulo: string, mensaje: string) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning'
    })
  }

  msjToastCorrecto(mensaje: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  msjToastError(mensaje: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: mensaje
    })
  }

  msjToastErrorClose(mensaje: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showCloseButton: true,
      showConfirmButton: false
    })
    
    Toast.fire({
      icon: 'error',
      title: mensaje
    })
  }

  msjToastCorrectoClose(mensaje: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showCloseButton: true,
      showConfirmButton: false
    })
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }
}
