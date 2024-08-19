import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from '../components/utils/roles';

import { CustomerRoutes } from './customer.routes';
import { AdminRoutes } from './admin.routes';
import { SaleRoutes } from './sale.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.SALE:
        return <SaleRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {/* com a function funciona, mas não fica tão bonitinho */}
      {/* {user ? AccessRoute(user.role) : <AuthRoutes />} */}
      {user ? <AccessRoute/> : <AuthRoutes />}
    </BrowserRouter>
  );
}