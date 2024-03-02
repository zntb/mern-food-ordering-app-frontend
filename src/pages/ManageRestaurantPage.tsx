import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from '@/api/MyRestaurantApi.tsx';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm.tsx';

function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
}

export default ManageRestaurantPage;
