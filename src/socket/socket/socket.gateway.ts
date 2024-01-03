import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('login')
  handleLogin(client: Socket, payload: { userId: string }) {
    // Handle login logic here
    console.log(`User ${payload.userId} logged in`);
  }

  @SubscribeMessage('logout')
  handleLogout(client: Socket, payload: { userId: string }) {
    // Handle login logic here
    console.log(`User ${payload.userId} logged out`);
  }
}
