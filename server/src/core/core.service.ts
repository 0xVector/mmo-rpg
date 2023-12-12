import { Injectable } from '@nestjs/common';
import { Client } from './implementation/client';

@Injectable()
export class CoreService {
  private clients: Map<string, Client>;

  constructor() {
    this.clients = new Map();
  }

  public registerClient(playerName: string): string {
    const client = new Client(playerName);
    this.clients.set(client.id, client);
    return client.id;
  }

  public heartbeat(id: string): void {
    if (!this.clients.has(id)) return;
    this.clients.get(id).heartbeat();
  }
}
