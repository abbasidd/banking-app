// session.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
  private sessions: Map<
    string,
    { userId: string; token: string; expiryTime: number }
  > = new Map();

  createSession(userId: string, token: string, expiryTime: number) {
    const existingSession = this.getUserSession(userId);
    if (existingSession) {
      // Invalidate existing session
      this.deleteSession(existingSession.token);
    }
    this.sessions.set(token, { userId, token, expiryTime });
  }

  getUserSession(userId: string) {
    return Array.from(this.sessions.values()).find(
      (session) => session.userId === userId,
    );
  }

  deleteSession(token: string) {
    this.sessions.delete(token);
  }
}
