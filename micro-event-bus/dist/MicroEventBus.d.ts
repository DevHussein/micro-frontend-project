import { Observable } from "rxjs";
interface IDomainEventKey {
  "checking-out": null;
  "continue-shopping": null;
  "place-order": null;
  "user-logged-in": string;
  "add-user-cart-item": IAddUserCartItemData;
}
interface IAddUserCartItemData {
  productId: number;
  username: string;
  amount: number;
}
export interface IBroadcastEvent<T extends keyof IDomainEventKey> {
  key: T;
  data?: IDomainEventKey[T];
}
export declare class MicroEventBus {
  private eventBus;
  on<T extends keyof IDomainEventKey>(
    key: T
  ): Observable<IDomainEventKey[T] | undefined>;
  broadcast<T extends keyof IDomainEventKey>(
    key: T,
    data: IDomainEventKey[T]
  ): void;
}
export {};
