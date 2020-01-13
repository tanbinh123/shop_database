import {Request} from "@/api/config";

class ShopkeeperRequest extends Request{
  public login(data: {
    account: string;
    pwd: string;
  }) {
    return this.post('/shopkeeper/login', data);
  }

  public register(data: {
    account: string;
    pwd: string;
    name: string;
  }) {
    return this.post('/shopkeeper/register', data);
  }

  public getInfo() {
    return this.post('/shopkeeper/getInfo', {});
  }
}

export const shopkeeperRequest = new ShopkeeperRequest();
