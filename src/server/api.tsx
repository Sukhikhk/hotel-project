import { remultExpress } from "remult/remult-express";
import { Hotel } from "../shared/hotel";

export const api = remultExpress(
    {
        entities: [Hotel],
        admin: true
    }
);