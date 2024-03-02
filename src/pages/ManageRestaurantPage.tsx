import { useCreateMyRestaurant } from '@/api/MyRestaurantApi.tsx';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm.tsx';

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
}

export default ManageRestaurantPage;
