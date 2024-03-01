import { useUpdateMyUser } from '@/api/MyUserApi.tsx';
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm.tsx';

function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
}

export default UserProfilePage;
