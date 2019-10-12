// XXX: Maybe create a bottender-env package for common type & lib
export enum Channel {
  Messenger = 'messenger',
  Line = 'line',
  Slack = 'slack',
  Telegram = 'telegram',
  Viber = 'viber',
}

export enum SessionDriver {
  Memory = 'memory',
  File = 'file',
  Redis = 'redis',
  Mongo = 'mongo',
}

export type BottenderConfig = {
  plugins?: any[];
  session?: {
    driver: SessionDriver;
    expiresIn?: number;
    stores: {
      memory: {
        maxSize?: number;
      };
      file: {
        dirname?: string;
      };
      redis: {
        port?: number;
        host?: string;
        password?: string;
        db: number;
      };
      mongo: {
        url: string;
        collectionName?: string;
      };
    };
  };
  initialState: Record<string, any>;
  channels?: {
    [Channel.Messenger]: {
      enabled: boolean;
      path: string;
      accessToken: string;
      verifyToken: string;
      appId: string;
      appSecret: string;
    };
    [Channel.Line]: {
      enabled: boolean;
      path: string;
      accessToken: string;
      channelSecret: string;
    };
    [Channel.Telegram]: {
      enabled: boolean;
      path: string;
      accessToken: string;
    };
    [Channel.Slack]: {
      enabled: boolean;
      path: string;
      accessToken: string;
      verificationToken: string;
    };
    [Channel.Viber]: {
      enabled: boolean;
      path: string;
      accessToken: string;
      sender: {
        name: string;
      };
    };
  };
};