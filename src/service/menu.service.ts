import { menuItemList } from '@/mocks/menu.mock';
import { MenuItem } from '@/types/entities/MenuItem';

class MenuService {
  list(): Promise<MenuItem[]> {
    return Promise.resolve(menuItemList);
  }
}

const menuService = new MenuService();
export default menuService;
