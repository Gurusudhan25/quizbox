import { local } from "../constants/Environment";

export class UriHelper {

  public static getUrl(uri: string) {
    return local + uri;
  }
}