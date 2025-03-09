import { STORAGE_ENUM_CONF } from "@/src/utils/storage.enum";
import { LivrosProps } from "../interface/produto.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function SaveCarStorage(cartItens: LivrosProps[]) {
  await AsyncStorage.setItem(
    STORAGE_ENUM_CONF.CART_STORAGE,
    JSON.stringify(cartItens)
  );
}

export async function GetCartStorage(): Promise<LivrosProps[]> {
  const storage = await AsyncStorage.getItem(STORAGE_ENUM_CONF.CART_STORAGE);

  const cartItensStorage: LivrosProps[] = storage ? JSON.parse(storage) : [];

  return cartItensStorage;
}

export async function GetCartStorageJsonStrign() {
  const storage = await AsyncStorage.getItem(STORAGE_ENUM_CONF.CART_STORAGE);

  const cartItensStorage = storage ? storage : [];

  return cartItensStorage;
}

export async function RemoveCartStorage() {
  await AsyncStorage.removeItem(STORAGE_ENUM_CONF.CART_STORAGE);
}
