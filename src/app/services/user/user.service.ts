import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userToken: string | null = null;

  constructor(private auth: Auth, private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        user.getIdToken().then(token => {
          this.userToken = token;
          localStorage.setItem('userToken', token);
        });
      } else {
        this.userToken = null;
        localStorage.removeItem('userToken');
      }
    });
  }

  register(userData: User) {
    const { email, password, name  } = userData;

    const profilePicture: string = userData.profilePicture || '';
    const telephone = userData.telephone || '';
    const birthDate = userData.birthDate || null;

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        // Guardar información adicional en Firestore
        return this.firestore.collection('users').doc(userCredential.user.uid).set({
          uid: userCredential.user.uid,
          email,
          name,
          telephone,
          birthDate,
          profilePicture
        });
      }).catch((error) => {
        let errorMessage: string;
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Este correo electrónico ya está en uso.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'El correo electrónico no es válido.';
            break;
          case 'auth/operation-not-allowed':
            errorMessage = 'La creación de cuentas con correo electrónico/contraseña no está habilitada.';
            break;
          case 'auth/weak-password':
            errorMessage = 'La contraseña no es lo suficientemente fuerte.';
            break;
          default:
            errorMessage = 'Error al registrar el usuario.';
            break;
        }
        return Promise.reject(new Error(errorMessage));
      });
  }

  login(userData: { password: any; email: any }) {
    return this.afAuth.signInWithEmailAndPassword(userData.email, userData.password)
      .then((result) => {
      })
      .catch((error) => {
        let errorMessage: string;
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'No existe una cuenta con este correo electrónico.';
            break;
          case 'auth/invalid-credential':
            errorMessage = 'Email o contraseña incorrecta.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'El correo electrónico no es válido.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'La cuenta correspondiente a este correo electrónico ha sido deshabilitada.';
            break;
          default:
            errorMessage = 'Error al iniciar sesión.';
            break;
        }
        return Promise.reject(new Error(errorMessage));
      });
  }

  logout() {
    return signOut(this.auth);
  }

  getUserData() {
    if (this.auth.currentUser) {
      return this.firestore.collection('users').doc(this.auth.currentUser.uid).valueChanges();
    } else {
      // Manejar el caso en que this.auth.currentUser sea nulo
      return console.log('No user logged in')
    }
  }
}
