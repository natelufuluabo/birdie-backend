import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class UsersService {
  constructor(@Inject('FIREBASE_APP') private readonly firebaseApp: admin.app.App) {}

  async createUser(username: string, email: string, password: string): Promise<{ status: HttpStatus, body: { message: string } }> {
    if (await this.usernameExist(username)) return { status: HttpStatus.BAD_REQUEST, body: { message: "The username is already in use by another account." } }
    try {
      const user = await this.firebaseApp.auth().createUser({
        email,
        password,
      });
  
      // Save user data to Firestore
      await this.saveUserDataToFirestore(username, user);
  
      return { status: HttpStatus.CREATED, body: { message: 'User registered successfully' } };
    } catch (error) {
      console.log(error.message)
      if (error.message === 'The email address is already in use by another account.') {
        return { status: HttpStatus.BAD_REQUEST, body: { message: error.message } }
      }
      return { status: HttpStatus.INTERNAL_SERVER_ERROR, body: { message: 'Internal Server Error' } }
    }
  }

  private async saveUserDataToFirestore(username: string, user: admin.auth.UserRecord): Promise<void> {
    const firestore = this.firebaseApp.firestore();
    const userRef = firestore.collection('users').doc(user.uid);

    const userData = {
      uid: user.uid,
      email: user.email,
      username
    };

    await userRef.set(userData);
  }

  private async usernameExist(username: string): Promise<boolean> {
    const firestore = this.firebaseApp.firestore();
    const userRef = firestore.collection('users').where('username', '==', username);
    const snapshot = await userRef.get();

    return !snapshot.empty;
  }
}