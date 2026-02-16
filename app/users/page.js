'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../lib/features/userSlice'; // Adjust path as needed
import { fetchUsers } from '../lib/features/userSlice';
export default function UsersPage() {
  const dispatch = useDispatch();
  // Read both the data AND the status
  const { users, status, error } = useSelector((state) => state.user);

  // Fetch data when the component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading users...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List (Fetched from API)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow bg-white">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-blue-500 text-sm">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}