import session from "express-session";
import Keycloak from 'keycloak-connect';

export class MyMemoryStore {
    private static _instance: MyMemoryStore;
    memoryStore: any;


    private constructor()
    {
        this.memoryStore = new session.MemoryStore();
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
}

export class MyKeyCloak {
    private static _instance: MyKeyCloak;
    keycloak: any;

    private constructor()
    {
        this.keycloak = new Keycloak({
            store: MyMemoryStore.Instance.memoryStore,
        });
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
}


